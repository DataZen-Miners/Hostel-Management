const express = require("express");
const userRoutes = express.Router();
const {
  userRegister,
  userLogin
} = require("../controllers/user-controller");

userRoutes.post("/register", userRegister);
userRoutes.post("/login", userLogin);

module.exports = userRoutes;