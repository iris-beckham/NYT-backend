const express = require("express");

const presidents = express.Router();

const { getAllPresidents } = require("../queries/presidents");

//Index
presidents.get("/", async (req, res) => {
  const allPresidents = await getAllPresidents();

  if (allPresidents) {
    res.status(200).json(allPresidents);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

module.exports = presidents;
