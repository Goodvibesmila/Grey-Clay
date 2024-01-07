//Importer
const mongoose = require('mongoose');
const { app } = require('./app');

// hanterar ev fel som kan uppstå under anslutning.
connectToDatabase().catch((err) => console.log(err));



// mongodb:://127.0.0.1: är localhost default
//27017 är mongodb defaultport.
// Hantera anslutning till mongoDB + kör servern
// strikt frågehantering till true.
async function connectToDatabase() {
    console.log('Connected to DB');
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://127.0.0.1:27017/grey-clay');
    app.listen(3000, () => console.log("server kör"))
}

// Behöver jag global.variablenamn? För att komma åt den överallt?

