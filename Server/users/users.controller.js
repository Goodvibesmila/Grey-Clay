// Import av bibliotek/moduler

const bcrypt = require("bcrypt")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { UserModel } = require('./users.model');


// Hämtar alla användare från databasen (usermodel.find)
// Skickas som JSON svar till klient, eller felmeddelande 500.
async function getAllUsers(req, res) {
    try {
        const users = await UserModel.find();
        res.json(users);

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
    try {

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
        console.log(postusers)

        res.status(201).send(postusers);
    } catch (error) {
        console.error("Error registering user:", error.message);
        res.status(500).send("Something went wrong");
    }
}



module.exports = { getAllUsers, registerUser };