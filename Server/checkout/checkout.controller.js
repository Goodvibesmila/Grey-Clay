const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { OrderModel } = require("./checkout.model");
const CLIENT_URL = "http://localhost:5173/shop";


// Creates a checkoutsession
async function checkout(req, res) {
    try {

        // Check if there's an active session, uses Stripe API, creates a session.
        // Returns session url and Id or status 400 depending on the response.
        if (req.session._id) {
            const session = await stripe.checkout.sessions.create({
                line_items: req.body.map((item => {

                    return {
                        price: item.price,
                        quantity: item.quantity,
                    };
                })),

                customer: req.session.stripeCustomerId,
                mode: "payment",
                success_url: `${CLIENT_URL}/confirmation`,
                cancel_url: CLIENT_URL,
                allow_promotion_codes: true,
            });

            res.status(200).json({ url: session.url, sessionId: session.id });
        }

    } catch (error) {
        console.log(error.message);
        res.status(400).json("Det gick inte");
    }
};



// Verify the peymentsession, creates order depending on the sessionresponse.
async function verifySession(req, res) {

    try {
        // Fetch response about paymentsession from stripe-checkout.
        const session = await stripe.checkout.sessions.retrieve(req.body.sessionId);

        if (session.payment_status !== "paid") {
            return res.status(400).json({ verified: false });
        }

        // Get all the details about the products, line items, that are part of the session with that Id.
        const line_items = await stripe.checkout.sessions.listLineItems(req.body.sessionId);

        // Creates a new orderModel based on the information from the session.
        const order = new OrderModel({
            created: session.created,
            customer:
            {
                name: session.customer_details.name,
                email: session.customer_details.email,
            },
            products: line_items.data.map((item) => {
                return {
                    product: item.description,
                    quantity: item.quantity,
                    price: item.price.unit_amount / 100,
                };
            }),
        });

        //Save the order in MongoDB
        await order.save();
        res.status(200).json(order);

    } catch (error) {
        console.log(error.message);
        res.status(500).json("Something went wrong");
    }
}

module.exports = { checkout, verifySession }