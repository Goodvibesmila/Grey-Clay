
const express = require("express");
const { checkout, verifySession } = require("./checkout.controller")

const checkoutRouter = express.Router().post("/checkout-session", checkout).post("/verify-checkout", verifySession)


module.exports = { checkoutRouter }