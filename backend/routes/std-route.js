const express = require("express");
const studentRoutes = express.Router();
const { getStudentById } = require("../controllers/std-controller");

studentRoutes.get("/student/:student_id", getStudentById);

module.exports = studentRoutes;
