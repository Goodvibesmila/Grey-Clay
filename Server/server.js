const mongoose = require('mongoose');
const { app } = require('./app');
const dotenv = require("dotenv").config();

// Handles errors, when connecting.
connectToDatabase().catch((err) => console.log(err));

// Connectiong to server and database.
async function connectToDatabase() {
    console.log('Connected to DB');
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    app.listen(3000, () => console.log("server is running"))
}
