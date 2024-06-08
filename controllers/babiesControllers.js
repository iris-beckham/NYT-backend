const express = require("express");

const babies = express.Router();

const { getBabyNames } = require("../queries/babies");

//Index
babies.get("/:year", async (req, res) => {
  const { year } = req.params;
  const allBabies = await getBabyNames(year);

  if (allBabies) {
    res.status(200).json(allBabies);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

module.exports = babies;
