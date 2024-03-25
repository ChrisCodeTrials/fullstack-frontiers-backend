const express = require("express");
const doctors = express.Router();
const { getAllDoctors, getOneDoctor } = require('../queries/doctors');


// INDEX
doctors.get('/', async (_req, res) => {
  try {
    const allDoctors = await getAllDoctors();
    res.status(200).json(allDoctors);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// SHOW
doctors.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await getOneDoctor(id);
    if (doctor) {
      res.json(doctor);
    } else {
      res.status(404).json({ error: 'Doctor not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = doctors;