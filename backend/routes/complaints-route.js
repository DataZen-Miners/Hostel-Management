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

complaintRoutes.post("/", postComplaints);
complaintRoutes.put("/:id", putComplaintsById);
complaintRoutes.get("/", getAllComplaintsByUser);
complaintRoutes.get("/userType", getUserType);
complaintRoutes.get("/userDetails", getUserDetails);
complaintRoutes.delete("/:id", deleteComplaints);

module.exports = complaintRoutes;