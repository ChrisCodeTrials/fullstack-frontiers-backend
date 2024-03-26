const express = require("express");
const quotes = express.Router();
const { deleteQuote, getAllQuotes, getOneQuote, createQuote, updateQuote } = require ('../queries/quotes')


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

// CREATE
quotes.post('/', async (req, res) => {
  try {
    const quote = await createQuote(req.body);
    res.status(201).json(quote);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// UPDATE
quotes.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedQuote = await updateQuote(id, req.body);
    res.status(200).json(updatedQuote);
  } catch (error) {
    res.status(400).json({ error });
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