
const express = require("express");
const { getAllOrders } = require("./order.controller")


const orderRouter = express.Router().get("/order/:email", getAllOrders)

module.exports = { orderRouter }