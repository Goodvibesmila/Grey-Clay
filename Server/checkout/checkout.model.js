const { Schema, model } = require("mongoose");


// MongoDB document - for orders.
const orderSchema = new Schema(
    {
        created: { type: Date, default: Date.now },
        customer: {
            name: { type: String, required: true },
            email: { type: String, required: false },
        },
        products: [
            {
                product: { type: String, required: true },
                quantity: { type: Number, required: true },
                price: { type: Number, required: true },
            },
        ],
    },
);

const OrderModel = model('order', orderSchema);
module.exports = { OrderModel };
