const express = require("express");
const doctors = express.Router({mergeParams:true});
const { getAllDoctors, getOneDoctor, updateDoctor } = require('../queries/doctors');
const { getAppointment } = require("../queries/appointments");


// INDEX
doctors.get('/', async (req, res) => {
  const { appt_id } = req.params

  if(appt_id){
    const appointment = await getAppointment(appt_id)
    const doctors = await getAllDoctors(appt_id)
    const response = {...appointment, doctors}
    res.status(200).json(response)
  }else{
    try {
      const allDoctors = await getAllDoctors();
      res.status(200).json(allDoctors);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }

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

doctors.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedDoctor = await updateDoctor(id, req.body);
    res.status(200).json(updatedDoctor);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = doctors;