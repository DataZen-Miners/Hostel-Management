const express = require("express");
const cors = require("cors");
const complaintRoutes = express.Router();
const {
  postComplaints,
  putComplaintsById,
  getAllComplaintsByUser,
  getUserType,
  getUserDetails,
  deleteComplaints
} = require("../controllers/complaints-controller");

complaintRoutes.use(cors());
complaintRoutes.use(express.json());

complaintRoutes.post("/complaints", postComplaints); // Ensure this route is correctly set up
complaintRoutes.put("/complaints/:id", putComplaintsById);
complaintRoutes.get("/complaints", getAllComplaintsByUser);
complaintRoutes.get("/userType", getUserType);
complaintRoutes.get("/userDetails", getUserDetails);
complaintRoutes.delete("/complaints/:id", deleteComplaints);

module.exports = complaintRoutes;