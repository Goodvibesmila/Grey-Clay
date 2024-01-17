const { Schema, model, models } = require("mongoose");


const orderSchema = new Schema(
    {
        created: { type: Date, default: Date.now },
        customer: { Type: String, required: true },
        products: [
            {
                product: { Type: String, required: true },
                quantity: { Type: Number, required: true },
                price: { Type: Number, required: true },
            },
        ],
    }
);

const OrderModel = models.user || model('order', orderSchema);

module.exports = { OrderModel };
