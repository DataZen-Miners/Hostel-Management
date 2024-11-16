const express = require("express");
const userRoutes = express.Router();
const {
  userRegister,
  userLogin,
  getUserRole
} = require("../controllers/user-controller");

userRoutes.post("/register", userRegister);
userRoutes.post("/login", userLogin);
userRoutes.get("/user-role", getUserRole);

module.exports = userRoutes;