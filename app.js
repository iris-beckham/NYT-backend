const express = require("express");
const cors = require("cors");
const transactionsController = require('./controllers/transactionController.js');

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Budget App");
});
app.use('/transactions', transactionsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.json({ error: "Page not found" });
});
// EXPORT
module.exports = app;
