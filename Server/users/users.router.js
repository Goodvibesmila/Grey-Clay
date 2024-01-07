// Importerar bibliotek/funktioner
const express = require("express");
const { getAllUsers, registerUser } = require("./users.controller")

// Skapar en router med Get/post-förfrågan.
const userRouter = express.Router().get("/users", getAllUsers).post("/registerUser", registerUser);


module.exports = { userRouter }