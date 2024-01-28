// Importerar bibliotek/funktioner
const express = require("express");
const { getAllUsers, registerUser, login, authorize, logout } = require("./users.controller")


// Skapar en router med Get/post-förfrågan.
const userRouter = express.Router()
    .get("/users", getAllUsers)
    .post("/register", registerUser)
    .post("/login", login)
    .get("/auth", authorize)
    .post("/logout", logout);



module.exports = { userRouter }