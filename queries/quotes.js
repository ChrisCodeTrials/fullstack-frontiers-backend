const db = require('../db/dbConfig.js')

const getAllQuotes = async () => {
  try {
    const allQuotes = await db.any('SELECT * FROM quotes')
    return allQuotes
  } catch (error) {
      return error
  }
};

const getOneQuote = async (id) => {
  try {
    const oneQuote = await db.one('SELECT * FROM quotes WHERE id=$1', id)
    return oneQuote
  } catch (error) {
    return error
  }
};
const createQuote = async (quote) => {
  try {
    const newQuote = await db.one(
      'INSERT INTO quotes (user_id, author, quote, category) VALUES($1, $2, $3, $4) RETURNING *',
      [quote.user_id, quote.author, quote.quote, quote.category]
    );
    return newQuote;
  } catch (error) {
    return error;
  }
};

const updateQuote = async (id, quote) => {
  const { author, quote: newQuote, category } = quote;
  try {
    const updatedQuote = await db.one(
      'UPDATE quotes SET author=$1, quote=$2, category=$3 WHERE id=$4 RETURNING *',
      [author, newQuote, category, id]
    );
    return updatedQuote;
  } catch (error) {
    return error;
  }
};
const deleteQuote = async (id) => {
  try {
    const deletedQuote = await db.one(
      "DELETE FROM quotes WHERE id = $1 RETURNING *",
      id
    );
    return deletedQuote;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllQuotes, getOneQuote, deleteQuote, updateQuote, createQuote }