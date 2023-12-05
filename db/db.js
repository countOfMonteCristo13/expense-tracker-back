/*
    Kako bismo koristili bazu podataka (u ovom slucaju MongoDB) moramo da se povezemo
    Da bi se povezali sa MongoDB koristicemo mongoose (paket koji nam pomaze da lakse komuniciramo sa MongoDB)
    Povezivanje sa bazom je asinhrona funkcija
    koja funkcionise preko try catch bloka
    await mongoose.connect(url)
    url dobijemo u MongoDB atlasu prilikom konfiguracije nase kolekcije
    Mongoose je biblioteka za MongoDB dizajnirana za Node.js koja olakšava rad sa MongoDB bazama podataka.
*/

const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { db };
