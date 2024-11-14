const express = require("express");
const cors = require("cors");
const app = express();
const Warden = require("../models/warden-model");

app.use(cors());
app.use(express.json());

exports.getWardenById = async (req, res) => {
  try {
    const { warden_id } = req.params;
    const warden = await Warden.findById(warden_id);
    if (!warden) {
      return res.status(404).json({ error: "Warden not found" });
    }
    res.json(warden);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};