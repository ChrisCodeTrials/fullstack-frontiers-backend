const db = require('../db/dbConfig.js')

const getAllAppointments = async () => {
  try {
    const allAppointments = await db.any('SELECT * FROM appointments')
    return allAppointments
  } catch (error) {
      return error
  }
};

const getAppointment = async (id) => {
    try {
      const oneAppointment = await db.one('SELECT * FROM appointments WHERE id=$1', id)
      return oneAppointment
    } catch (error) {
      return error
    }
};

const createAppointment = async (appointment) => {
  try {
    const newAppointment = await db.one(
      'INSERT INTO appointments (appt_date, created_at, appt_reason, duration, location) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [appointment.appt_date, appointment.created_at, appointment.appt_reason, appointment.duration, appointment.location]
    );
    return newAppointment;
  } catch (error) {
    return error;
  }
};

const updateAppointment = async (id, appointment) => {
  const { appt_date, appt_reason, duration, location } = appointment;
  try {
    const updatedAppointment = await db.one(
      'UPDATE appointments SET appt_date=$1, appt_reason=$2, duration=$3, location=$4  WHERE id=$5 RETURNING *',
      [appt_date, appt_reason, duration, location, id]
    );
    return updatedAppointment;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllAppointments, getAppointment, createAppointment,  updateAppointment }