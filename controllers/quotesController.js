const express = require("express");
const quotes = express.Router();
const { deleteQuote } = require ('../queries/quotes')

quotes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedQuote = await deleteQuote(id);
  if (deletedQuote.id) {
    res.status(200).json(deletedQuote);
  } else {
    res.status(404).json("Quote not found");
  }
});

module.exports = { deleteQuote }