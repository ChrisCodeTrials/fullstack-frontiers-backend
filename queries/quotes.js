const db = require('../db/dbConfig.js')

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

module.exports = { deleteQuote }