const express = require("express");
const wardenRoutes = express.Router();
const { getWardenById } = require("../controllers/warden-controller");

wardenRoutes.get("/warden/:warden_id", getWardenById);

module.exports = wardenRoutes;