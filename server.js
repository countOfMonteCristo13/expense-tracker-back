/*
    Glavni fajl u backendu koji predstavlja server
    Express je fleksibilan i lagan framework koji pruža osnovne alate za brzu izgradnju serverskih aplikacija. 
    Njegova popularnost dolazi iz jednostavnosti i efikasnosti u radu sa Node.js za izgradnju web aplikacija i API-ja.

    Middleware je koncept koji se često koristi u web developmentu 
    i odnosi se na funkcije koje se izvršavaju između prijema HTTP zahteva (request) i slanja HTTP odgovora (response). 
    Ove funkcije omogućavaju manipulaciju ili proširenje zahteva, kao i odgovora, pre nego što stignu do finalne destinacije
    ili pre nego što ih posmatrač (handler) obradi.

    Posto koristimo express moramo da ga importujemo
    Koristimo i cors (je mehanizam koji omogućava web stranicama da zahtevaju resurse s drugih domena (origina) 
    koji nisu isti kao onaj s kojeg je originalno učitana web stranica.)

    Posto koristimo bazu podataka, moramo da je importujemo
    Koristimo i objekat readdirSync iz paketa FileSystem koji sluzi za citanje svih elemenata iz foldera sinhrono
    Koristimo i paket dotenv koji sluze da varijable okoline tj za lakse povezivanje sa njima

    Zatim moramo da koristimo express paket preko varijable koju deklarisemo. Uglavnom se zove app
    Moramo da kazemo da zelimo da nam podaci budu u json formatu i da zelimo da koristimo cors
    To nam je taj middleware

    u glavnoj metodi pozivamo bazu i trazimo da nam app slusa desavanja na nasem portu
    na kraju pozivamo glavnu metodu!
*/

const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const { readdirSync } = require("fs");
require("dotenv").config(); // Učitavanje varijabli okoline iz .env fajla

const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(express.json()); // podaci da budu u json-u
app.use(cors()); // koristimo cors

//routes
readdirSync("./routes").map(
  (route) => app.use("/api/v1", require("./routes/" + route)) // zagrada oznacava putanju ka fajlu transactions.js
  // require i zagrada ucitava transactions.js i ostale fajlove tj vracaju router koji smo exportovali u tim fajlovima
  //taj router vraca brdo endpointa i svaki se zasebno vezuje za /api/v1 rutu
);

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("listening to port: ", PORT);
  });
};

server();
