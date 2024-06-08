const express = require("express");
const cors = require("cors");

const app = express();

const presidentsController = require("./controllers/presidentsController");
const babiesController = require("./controllers/babiesController");

app.use(cors());
app.use(express.json());
app.use("/api/presidents", presidentsController);
app.use("/api/babies", babiesController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.json({ error: "Page not found" });
});
// EXPORT
module.exports = app;
