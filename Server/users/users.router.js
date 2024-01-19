// Importerar bibliotek/funktioner
const express = require("express");
const { getAllUsers, registerUser, login } = require("./users.controller")


// Skapar en router med Get/post-förfrågan.
const userRouter = express.Router().get("/users", getAllUsers).post("/register", registerUser).post("/login", login);



module.exports = { userRouter }