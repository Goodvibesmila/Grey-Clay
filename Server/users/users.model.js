const { Schema, model, models } = require("mongoose");

// MongoDB document - user.
const userSchema = new Schema({
    stripeCustomerId: { type: String, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

const UserModel = model('user', userSchema);

module.exports = { UserModel };
