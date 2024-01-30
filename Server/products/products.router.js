const express = require("express");
const { listAllProducts } = require("./products.controller")


// Router and endpoints for products.
const productsRouter = express.Router().get("/products", listAllProducts);

module.exports = { productsRouter };