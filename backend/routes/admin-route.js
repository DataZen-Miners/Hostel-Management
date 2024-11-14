const express = require("express");
const adminRoutes = express.Router();
const {
  getAllUsers,
  getAllComplaints,
  addUser,
  deleteUser,
  deleteComplaint
} = require("../controllers/admin-controller");

adminRoutes.get("/users", getAllUsers);
adminRoutes.get("/complaints", getAllComplaints);
adminRoutes.post("/user", addUser);
adminRoutes.delete("/user/:user_id", deleteUser);
adminRoutes.delete("/complaint/:complaint_id", deleteComplaint);

module.exports = adminRoutes;