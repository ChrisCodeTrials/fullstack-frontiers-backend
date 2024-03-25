const db = require('../db/dbConfig.js')


const getAllDoctors = async () => {
  try {
    const allDoctors = await db.any('SELECT * FROM doctors')
    return allDoctors
  } catch (error) {
      return error
  }
};

const getOneDoctor = async (id) => {
    try {
      const oneDoctor = await db.one('SELECT * FROM doctors WHERE id=$1', id)
      return oneDoctor
    } catch (error) {
      return error
    }
};

module.exports = {getAllDoctors, getOneDoctor}