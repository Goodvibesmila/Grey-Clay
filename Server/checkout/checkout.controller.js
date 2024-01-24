const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { OrderModel } = require("./checkout.model");


const CLIENT_URL = "http://localhost:5173/shop";

// skapar en checkoutsession
async function checkout(req, res) {
    try {
        //Kontrollerar om användaren har en aktiv session (req.session.id).
        //Anropar Stripe Checkout API för att skapa en session.
        //Returnerar sessionens URL och ID.

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




//Använder Checkout API för att hämta sessionens detaljer.
//Kontrollerar om betalningen är "paid".
//Hämtar produktinformation från sessionens line items.
//Sparar beställningsinformationen i en JSON-fil (orders.json).



// verifiera betalningssession, skapa order baserat på verifierad session.
async function verifySession(req, res) {

    try {

        // Hämtar information om betalningssession från stripecheckout, 
        //med medföljande sessionsID
        const session = await stripe.checkout.sessions.retrieve(req.body.sessionId);

        // Om betald, om inte return 400
        if (session.payment_status !== "paid") {

            return res.status(400).json({ verified: false });
        }

        // Hämtar detaljer om produkterna line items som ingår i session.
        const line_items = await stripe.checkout.sessions.listLineItems(req.body.sessionId);

        // Skapar en ny orderModel baserad på information från session
        // inkluderar skapelseid, kundnamn, lista över produkter med deras beskrivning, antal och pris.

        console.log(session.created)

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
        console.log(order)

        //sparar ordern i databasen, plus "sant svar eller felsvar"
        await order.save();

        res.status(200).json(order);


    } catch (error) {
        console.log(error.message, "Det är denna");
        res.status(500).json("Something went wrong");
    }
}



module.exports = { checkout, verifySession }