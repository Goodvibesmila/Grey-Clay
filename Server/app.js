//import av bibliotek
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// En middleware tolkar om json till läsbar kod så att server och client kan kommunicera
app.use(express.json())

const { userRouter } = require("./users/users.router");
const { productsRouter } = require("./products/products.router");

app.use(cors({
    origin: "*",
}));

app.use("/api", userRouter, productsRouter);

module.exports = { app };
