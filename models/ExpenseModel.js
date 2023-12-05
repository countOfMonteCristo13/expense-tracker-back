/*
  Kako bismo kreirali shemu za odredjen model moramo da koristimo mongoose i moramo da ga importujemo
  zatim deklarisemo ExpenseShema preko rezervisane reci new i mongoose.Schema
  deklarisemo objekat koji ime svoje osobine
  svaka osobine ima svoje atribute a to su tip,required,maxlength...
  Na kraju moramo da exportujemo zadati model
  module.exports = mongoose.model("Expense", ExpenseSchema);
*/

const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
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
      default: "expense",
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

module.exports = mongoose.model("Expense", ExpenseSchema);
