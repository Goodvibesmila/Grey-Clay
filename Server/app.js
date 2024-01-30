require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();
app.use(express.json())

app.use(
    cookieSession({
        name: "grey-clay-web",
        keys: ["secret-key"],
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: false,
        secure: false,
    })
);


// Import routes
const { userRouter } = require("./users/users.router");
const { productsRouter } = require("./products/products.router");
const { checkoutRouter } = require("./checkout/checkout.router");
const { orderRouter } = require("./order/order.router")


// cors-requests
// * alouds all domains.
app.use(cors({
    origin: "*",
}));

app.use("/api", userRouter, productsRouter, checkoutRouter, orderRouter);

module.exports = { app };
