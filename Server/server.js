// Fil för att köra servern.

const { app } = require("./app")

app.listen(3000, () => console.log("server kör"))