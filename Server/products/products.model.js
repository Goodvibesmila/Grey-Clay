//Import av bibliotek
const { Schema, model, models } = require("mongoose");


// schema för produkter, och var produkts typer, 
// Versionkey -false = för att undvika att lägga till en versionsnyckel i dokumenten
const productSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, requried: true },
        price: { type: Number, required: true },
        image: String,
    },
    { versionKey: false }
);

// skapar modul för produkt, omdefinieras till  products.
const ProductModel = models.products || model("products", productSchema);

module.exports = { ProductModel };
