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
const authMiddleware = require("../middleware/auth");

complaintRoutes.use(cors());
complaintRoutes.use(express.json());

complaintRoutes.post("/complaints", authMiddleware, postComplaints);
complaintRoutes.put("/complaints/:id", authMiddleware, putComplaintsById);
complaintRoutes.get("/complaints", authMiddleware, getAllComplaintsByUser);
complaintRoutes.get("/userType", authMiddleware, getUserType);
complaintRoutes.get("/userDetails", authMiddleware, getUserDetails);
complaintRoutes.delete("/complaints/:id", authMiddleware, deleteComplaints);

module.exports = complaintRoutes;