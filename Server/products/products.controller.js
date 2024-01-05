
// Åtkomst Apinyckel stripe.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function listAllProducts(req, res) {
    console.log("hej")
    try {
        const products = await stripe.products.list({
            expand: ["data.default_price"]
        });

        res.status(200).json(products.data)
    }

    catch (error) {
        console.log(error.message);
        res.status(400).json("Det gick inte bra.");
    }
}

module.exports = { listAllProducts };