const express = require("express");
const quotes = express.Router();
const { deleteQuote, getAllQuotes, getOneQuote } = require ('../queries/quotes')


// INDEX
quotes.get('/', async (_req, res) => {
  try {
    const allQuotes = await getAllQuotes();
    res.status(200).json(allQuotes);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// SHOW
quotes.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const quote = await getOneQuote(id);
    if (quote) {
      res.json(quote);
    } else {
      res.status(404).json({ error: 'Quote not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE
quotes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedQuote = await deleteQuote(id);
  if (deletedQuote.id) {
    res.status(200).json(deletedQuote);
  } else {
    res.status(404).json("Quote not found");
  }
});

module.exports = quotes