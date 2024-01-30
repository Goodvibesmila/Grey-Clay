const express = require("express");
const { getAllUsers, registerUser, login, authorize, logout } = require("./users.controller")


// Routes and endpoints for users.
const userRouter = express.Router()
    .get("/users", getAllUsers)
    .post("/register", registerUser)
    .post("/login", login)
    .get("/auth", authorize)
    .post("/logout", logout);



module.exports = { userRouter }