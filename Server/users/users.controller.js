// Import av bibliotek/moduler

const bcrypt = require("bcrypt")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { UserModel } = require('./users.model');


// Hämtar alla användare från databasen (usermodel.find)
// Skickas som JSON svar till klient, eller felmeddelande 500.
async function getAllUsers(req, res) {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);

    } catch (error) {
        console.error("error, cant fetch user", error.message);
        res.status(500).send("Something went wrong");
    }
}


// Registrerar nya användare.
// Hashar lösenord.
// Skapar ny kund med stripe.costumer.create
// Sparas i databas med await, postusers.save
// Skickar nya användaren som json-svar till klient, 201
// Eller felmeddelande 500.
async function registerUser(req, res) {

    const alreadyExists = await UserModel.findOne({
        email: req.body.email,
    })

    if (alreadyExists) {
        return res.status(409).json("Customer already exists.")
    }

    try {
        console.log(req.body)
        const { password } = req.body;
        const bcryptPassword = await bcrypt.hash(password, 10);

        const createCustomerStripe = await stripe.customers.create({
            email: req.body.email,
            name: req.body.name
        });

        const postusers = new UserModel({
            stripeCustomerId: createCustomerStripe.id,
            email: req.body.email,
            name: req.body.name,
            password: bcryptPassword
        });

        await postusers.save();

        res.status(201).send(postusers);
    } catch (error) {
        console.error("Error registering user:", error.message);
        res.status(500).send("Something went wrong");
    }
}


// asynkronisk operation, tre parametrar
async function login(req, res, next) {

    // Extraherar password och email från req.body, skickas med postförfrågan till klient.
    // req.body är innehållet i password och mail.
    try {
        const { password, email, } = req.body;
        // await för att vänta på getAllUsers ska köras klart
        // Hämtar alla användare från databasen.
        // Get all users funkar i restfilen.
        const users = await UserModel.find();

        // Om users är falskt returneras felkoden.
        if (!users) {
            return res.status(500).json("Användare hämtas ej")
        }
        // Om ingen användare hittas eller lösen ej matchar
        // Hashade lösenordet i databas
        const dbuser = users.find(user => user.email === email)
        if (!dbuser || !(await bcrypt.compare(password, dbuser.password))) {
            return res.status(401).json("Wrong id or password");
        }

        // Om användaren är "sann/lyckas" autentiserad, 
        // tilldelas dbuser till req.session
        // sessionhantering för autentiserad användare.
        req.session = dbuser;
        res.status(200).json(dbuser);

    } catch (error) {
        next(error);
    }


}


async function authorize(req, res) {
    console.log(req.session);
    if (!req.session._id) {
        return res.status(200).json("Guest visitor");
    }
    res.status(200).json(req.session);
}


async function logout(req, res) {
    req.session = null;
    res.status(204).json("Customer logged out")
}




module.exports = { getAllUsers, registerUser, login, authorize, logout };

