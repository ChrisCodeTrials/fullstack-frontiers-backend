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

module.exports = { getAllQuotes, getOneQuote, deleteQuote }