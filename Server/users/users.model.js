const { Schema, model, models } = require("mongoose");
//const Joi = require("joi");



// Skapar ett schema för user:
// Definierar strukturen för dokumenten/ "objekt"
// Som sedan lagras i DB 
// Schema hjälper till att organisera och strukturera data. 
// scheman kan hjälpa till med validering av datan innan det sparas i DB.
// Scheman används för att skapa en mongoose-modell.
// Modellen kan sedan användas i koden för att utföra operationer. 


// Behöver man skriva new mongoose schema, eller
// räcker det att skriva schema?

// Definierat userschema attributen rätt?
const userSchema = new Schema({
    stripeCustomerId: { type: String, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

// Skapa joischema för validering
// joischema: Här kan man lägga in validering.
//Förhindra ogiltig data, 
// Integration med Express och Middleware: 
//Joi kan enkelt integreras med Express och 
//användas som middleware för att validera inkommande 
//HTTP-förfrågningar och svar.


const UserModel = models.user || model('user', userSchema);

module.exports = { UserModel };
