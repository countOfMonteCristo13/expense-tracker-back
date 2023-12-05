/*
  Kako bismo kreirali model za odredjenu shemu treba da koristimo mongoose (paket koji pomaze za komunikaciju sa mongoDB)
  Importujemo mongoose 
  Kreiramo shemu
  shema se sastoji od objekta
  objekat sadrzi osobine tj. kljuceve koje ce koristiti objekat
  svaka ta osobina je zaseban objekat koji ima svoje kljuceve a ti kljucevi su atributi koji opisuju osobinu
  atributi mogu da budu tip (number,string...), da li je obavezan ...
  Na kraju ovaj model mora da se exportuje kako bi mogao da se koristi
  module.exports = mongoose.model('Income',IncomeSchema)
*/

const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    amount: {
      type: Number,
      required: true,
      maxLength: 20,
      trim: true,
    },
    type: {
      type: String,
      default: "income",
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Income", IncomeSchema);
