/* 
Importujemo ExpenseShemu iz Expense modela
Kreiramo funkcije(kontrolere) za odredjene endpointe koji su deklarisani u routes-u 
Te metode moramo da exportujemo kako bi ih koristitli u routes-u u transactions.js
Deklarisemo promenjivu tipa shema i dodamo joj podatke iz body-a
zatim kada prodje sva validacija mi tu promenjivu(objekat) sacuvavamo u bazu podataka

*/

const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const expense = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    //validations
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be positive number" });
    }
    await expense.save();
    res.status(200).json({ message: "Expense added" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }

  console.log(expense);
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json(expense);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
