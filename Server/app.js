//import av bibliotek
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();

// En middleware tolkar om json till
// läsbar kod så att server och client
// kan kommunicera
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


// Import av routers
const { userRouter } = require("./users/users.router");
const { productsRouter } = require("./products/products.router");
const { checkoutRouter } = require("./checkout/checkout.router");


// Hanterar cors-origin-förfrågningar 
// * - tillåter alla domäner
app.use(cors({
    origin: "*",
}));

app.use("/api", userRouter, productsRouter, checkoutRouter);

module.exports = { app };
