require("dotenv").config()
const { OrderModel } = require("../checkout/checkout.model");

// Get all orders.
async function getAllOrders(req, res) {

    try {
        const orders = await OrderModel.find();
        let customerOrders = [];
        for (let index = 0; index < orders.length; index++) {

            if (orders[index].customer.email == req.params.email) {
                customerOrders.push(orders[index])
            }
        }

        res.status(200).json(customerOrders);

    } catch (error) {
        console.error("error, cant fetch order", error.message);
        res.status(500).send("Something went wrong");
    }
}

module.exports = { getAllOrders };