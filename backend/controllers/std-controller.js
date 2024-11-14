const express = require("express");
const cors = require("cors");
const app = express();
const Student = require("../models/std-model");

app.use(cors());
app.use(express.json());

exports.getStudentById = async (req, res) => {
  try {
    const { student_id } = req.params;
    const student = await Student.findById(student_id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};