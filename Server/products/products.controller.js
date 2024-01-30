const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function listAllProducts(req, res) {
    try {
        const stripeProducts = await stripe.products.list({
            expand: ["data.default_price"],
            limit: 6,
            starting_after: req.query.starting_after,
            ending_before: req.query.ending_before,
        });

        const products = stripeProducts.data.map(stripeProduct => ({
            title: stripeProduct.name,
            description: stripeProduct.description,
            price: stripeProduct.default_price.unit_amount / 100,
            image: stripeProduct.images[0] || null,
            id: stripeProduct.default_price.id,
            product_id: stripeProduct.id
        }))

        const getHasPrevious = () => {
            if (req.query.starting_after) {
                return true
            }
            if (req.query.ending_before) {
                return stripeProducts.has_more
            }
            return false
        }

        const getHasMore = () => {
            if (req.query.ending_before) {
                return true
            }

            return stripeProducts.has_more

        }

        res.status(200).json({ products, has_more: getHasMore(), has_previous: getHasPrevious() })
    }

    catch (error) {
        console.log(error.message);
        res.status(400).json("Det gick inte bra.");
    }
}



module.exports = { listAllProducts };