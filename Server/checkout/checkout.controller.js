const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { OrderModel } = require("./checkout.model");


// skapar en checkoutsession
async function checkout(req, res) {

    try {
        //Kontrollerar om användaren har en aktiv session (req.session.id).
        //Anropar Stripe Checkout API för att skapa en session.
        //Returnerar sessionens URL och ID.

        if (req.session.id) {

            const session = await stripe.checkout.sessions.create({
                line_items: req.body.map((item) => {



                    return {
                        price: item.product,
                        quantity: item.quantity,
                    };
                }),


                customer: req.session.id,
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




//Använder Checkout API för att hämta sessionens detaljer.
//Kontrollerar om betalningen är "paid".
//Hämtar produktinformation från sessionens line items.
//Sparar beställningsinformationen i en JSON-fil (orders.json).

async function verifySession(req, res) {

    try {

        const session = await stripe.checkout.sessions.retrieve(req.body.sessionId);

        if (session.payment_status !== "paid") {

            return res.status(400).json({ verified: false });
        }


        // const data = fs.readFileSync("orders.json");
        // const pushOrder = JSON.parse(data)
        const line_items = await stripe.checkout.sessions.listLineItems(req.body.sessionId);


        const order = new OrderModel({
            created: session.created,
            customer: session.customer_details.name,
            products: line_items.data.map((item) => {
                return {
                    product: item.description,
                    quantity: item.quantity,
                    price: item.price.unit_amount / 100,
                };
            }),
        });

        // const dbOrder = new Order(order);
        await order.save(OrderModel);

        res.status(200).json({ verified: true });


    } catch (error) {
        console.log(error.message);
        res.status(500).json("Something went wrong");

    }
}



module.exports = { checkout, verifySession }