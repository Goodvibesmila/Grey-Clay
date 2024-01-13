const { ProductModel } = require('./products.model');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function listAllProducts(req, res) {
    try {
        const stripeProducts = await stripe.products.list({
            expand: ["data.default_price"]
        });

        const dbproducts = stripeProducts.data.map(stripeProduct => ({
            title: stripeProduct.name,
            description: stripeProduct.description,
            price: stripeProduct.default_price.amount ? stripeProduct.default_price.amount / 100 : 0,
            image: stripeProduct.images[0] || null,
            id: stripeProduct.id,
        }))

        console.log(dbproducts)

        await ProductModel.insertMany(dbproducts);
        res.status(200).json(dbproducts)
    }

    catch (error) {
        console.log(error.message);
        res.status(400).json("Det gick inte bra.");
    }
}



module.exports = { listAllProducts };