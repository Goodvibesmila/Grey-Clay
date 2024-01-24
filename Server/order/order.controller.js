require("dotenv").config()
const { OrderModel } = require("../checkout/checkout.model");


// Hämtar ordrar
async function getAllOrders(req, res) {

    try {
        // Hämtar alla ordrar från databasen
        const orders = await OrderModel.find();
        let customerOrders = [];
        for (let index = 0; index < orders.length; index++) {

            if (orders[index].customer.email == req.params.email) {
                customerOrders.push(orders[index])
            }
        }
        // const customerorder = orders.filter((customerorder) => customerorder.customer.email == req.params.email)
        // Svarar om hämtning var framgångsrik
        res.status(200).json(customerOrders);

        // Svarar om det uppstår fel vid hämtning.
    } catch (error) {
        console.error("error, cant fetch order", error.message);
        res.status(500).send("Something went wrong");
    }
}


module.exports = { getAllOrders };