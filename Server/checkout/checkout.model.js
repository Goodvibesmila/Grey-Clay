const { Schema, model, models } = require("mongoose");


const orderSchema = new Schema(
    {
        created: { type: Date, default: Date.now },
        customer: { Type: String },
        products: [
            {
                product: { Type: String },
                quantity: { Type: Number },
                price: { Type: Number },
            },
        ],
    }
);

const OrderModel = models.user || model('order', orderSchema);

module.exports = { OrderModel };
