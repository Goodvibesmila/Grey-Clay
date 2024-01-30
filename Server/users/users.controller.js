const bcrypt = require("bcrypt")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { UserModel } = require('./users.model');


// Get all users
async function getAllUsers(req, res) {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something went wrong");
    }
}


// Register/Creates new user, bcrypt the password, save user in database and stripe.
async function registerUser(req, res) {

    const alreadyExists = await UserModel.findOne({
        email: req.body.email,
    })

    if (alreadyExists) {
        return res.status(409).json("Customer already exists.")
    }

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
        res.status(201).send(postusers);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something went wrong");
    }
}


// Login in user. 
async function login(req, res, next) {

    try {
        const { password, email, } = req.body;
        const users = await UserModel.find();

        // If user is not in database.
        if (!users) {
            return res.status(500).json("No customer")
        }

        // If user does not match logininformation.
        const dbuser = users.find(user => user.email === email)
        if (!dbuser || !(await bcrypt.compare(password, dbuser.password))) {
            return res.status(401).json("Wrong id or password");
        }

        // sessionauthentication, and statusmessage.
        req.session = dbuser;
        res.status(200).json(dbuser);

    } catch (error) {
        next(error);
    }
}

// Authentication function.
async function authorize(req, res) {
    if (!req.session._id) {
        return res.status(200).json("Guest visitor");
    }
    res.status(200).json(req.session);
}

// Logout function.
async function logout(req, res) {
    req.session = null;
    res.status(204).json("Customer logged out")
}

module.exports = { getAllUsers, registerUser, login, authorize, logout };

