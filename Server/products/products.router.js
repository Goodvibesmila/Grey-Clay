const express = require("express");
const { listAllProducts } = require("./products.controller")



const productsRouter = express.Router().post("/products", listAllProducts);

module.exports = { productsRouter };