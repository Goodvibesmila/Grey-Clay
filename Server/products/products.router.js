const express = require("express");
const { listAllProducts } = require("./products.controller")



const productsRouter = express.Router().get("/products", listAllProducts);

module.exports = { productsRouter };