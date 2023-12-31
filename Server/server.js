// importerar express
const express = require("express");


//För att kunna skapa vår app.
const app = express();


//En route för vårt API + ett respons + skickar en json-array med användare. Det här är ingenting man behöver göra i sin server.js fil utan kan läggas i routerfilen istället. I router-filer för olika routes kan man samla sina endpoints.
// Har skapat den här listan för att se att kontakten med min server fungerar.
app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

//Det kan vara bra att lägga till app.use("/api", require("./routes/api"))


//Vi ska fetch(hämta) vår usersarray + port 5000 som servern körs på och frontend på 3000.
app.listen(5000, () => { console.log("server kör") })