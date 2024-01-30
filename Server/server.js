const mongoose = require('mongoose');
const { app } = require('./app');

// Handles errors, when connecting.
connectToDatabase().catch((err) => console.log(err));

// Connectiong to server and database.
async function connectToDatabase() {
    console.log('Connected to DB');
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://127.0.0.1:27017/grey-clay');
    app.listen(3000, () => console.log("server kör"))
}
