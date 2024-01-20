const { Schema, model, models } = require("mongoose");



const orderSchema = new Schema(
    {
        created: { type: Date, default: Date.now },
        customer: {
            name: { type: String, required: true },
            email: { type: String, required: true, unique: true },
        },
        products: [
            {
                product: { type: String, required: true },
                quantity: { type: Number, required: true },
                price: { type: Number, required: true },
            },
        ],
    }
);

const OrderModel = models.user || model('order', orderSchema);

module.exports = { OrderModel };
