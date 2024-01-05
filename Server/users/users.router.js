
const express = require("express");
const { getAllUsers, registerUser } = require("./users.controller")


const userRouter = express.Router().get("/users", getAllUsers).post("/registerUser", registerUser);


module.exports = { userRouter }