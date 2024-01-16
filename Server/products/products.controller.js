const { ProductModel } = require('./products.model');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function listAllProducts(req, res) {
    try {
        const stripeProducts = await stripe.products.list({
            expand: ["data.default_price"]
        });

        console.log(stripeProducts.data)

        const products = stripeProducts.data.map(stripeProduct => ({
            title: stripeProduct.name,
            description: stripeProduct.description,
            price: stripeProduct.default_price.unit_amount / 100,
            image: stripeProduct.images[0] || null,
            id: stripeProduct.id,
        }))

        // await ProductModel.insertMany(dbproducts);
        res.status(200).json(products)
    }

    catch (error) {
        console.log(error.message);
        res.status(400).json("Det gick inte bra.");
    }
}



module.exports = { listAllProducts };