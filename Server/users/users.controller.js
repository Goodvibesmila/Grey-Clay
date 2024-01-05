const bcrypt = require("bcrypt")

// Åtkomst Apinyckel stripe.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const fs = require("fs");
const path = require("path");

// Här ska jag lägga in path till mongoDB
const filePath = path.join(__dirname, "../users.json");

function getAllUsers(req, res) {
    const users = fs.readFileSync(filePath);
    return JSON.parse(users);
}

async function registerUser(req, res) {

    fs.readFile("./users.json", async (err, data) => {

        if (err) {
            res.status(404).send("Oops, something went wrong");
            return;
        }


        const users = JSON.parse(data)
        console.log(data)

        const { password } = req.body;
        const bcryptPassword = await bcrypt.hash(password, 10);


        const createCustomerStripe = await stripe.customers.create({
            email: req.body.email,
            name: req.body.name
        });


        const postusers = {
            id: createCustomerStripe.id,
            email: req.body.email,
            name: req.body.name,
            password: bcryptPassword
        }

        users.push(postusers);
        fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {

            if (err) {
                res.status(404).send("ERROR")
            }
        })

        res.status(201).send(users);
    })
}


module.exports = { getAllUsers, registerUser };