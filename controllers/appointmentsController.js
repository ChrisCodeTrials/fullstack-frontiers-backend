const express = require("express");
const appointments = express.Router();
const { getAllAppointments, getAppointment, createAppointment, updateAppointment } = require('../queries/appointments');
const doctorsController = require("./doctorsController")


appointments.use("/:appt_id/doctors", doctorsController)
// INDEX
appointments.get('/', async (_req, res) => {
  try {
    const allAppointments = await getAllAppointments();
    res.status(200).json(allAppointments);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


// SHOW
appointments.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await getAppointment(id);
    if (appointment) {
      res.json(appointment);
    } else {
      res.status(404).json({ error: 'Appointment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// CREATE
appointments.post('/', async (req, res) => {
  try {
    const appointment = await createAppointment(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// UPDATE
appointments.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAppointment = await updateAppointment(id, req.body);
    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(400).json({ error });
  }
});


module.exports = appointments;
