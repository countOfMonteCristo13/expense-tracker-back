/*
 Importujemo metode iz kontrolera koje su nam potrebne za odredjene endpointe
 deklarisemo router preko expresa
 zatim deklarisemo razne http metode i endpointe za router
 Na kraju ovaj modul moramo da exportujemo!!!
 Exportujemo kako bismo ga koristili u serveru!
*/

const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("../controllers/expense");
const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/income");

const router = require("express").Router();

router
  .post("/add-income", addIncome) // pozivamo funkciju addIncome na toj ruti kada je post
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpenses)
  .delete("/delete-expense/:id", deleteExpense);

module.exports = router;
