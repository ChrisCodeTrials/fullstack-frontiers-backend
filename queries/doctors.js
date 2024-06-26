const db = require('../db/dbConfig.js')


const getAllDoctors = async (appt_id) => {
  if(appt_id){
    const allDoctors = await db.any('SELECT * FROM doctors WHERE appt_id=$1', appt_id)
    return allDoctors
  }else{
    try {
      const allDoctors = await db.any('SELECT * FROM doctors')
      return allDoctors
    } catch (error) {
        return error
    }
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

const updateDoctor = async (id, doctor) => {
  const { appt_id} = doctor
  try {
    const updatedDoctor = await db.one(
      'UPDATE doctors SET appt_id=$1 WHERE id=$2 RETURNING *',
      [appt_id, id]
    );
    return updatedDoctor;
  } catch (error) {
    return error;
  }
};
module.exports = {getAllDoctors, getOneDoctor, updateDoctor}