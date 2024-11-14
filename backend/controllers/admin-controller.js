const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
const Admin = require("../models/admin-model");
const User = require("../models/user-model");
const Student = require("../models/std-model");
const Warden = require("../models/warden-model");
const Complaint = require("../models/complaint-model");

app.use(cors());
app.use(express.json());

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.addUser = async (req, res) => {
  const { name, email, contact, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(401).json("User already exists!");
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      contact,
      password: bcryptPassword,
      role
    });

    await newUser.save();

    if (role === "Student") {
      const { hostel, rollNumber, roomNumber, slc } = req.body;
      const newStudent = new Student({
        _id: newUser._id,
        name,
        email,
        contact,
        hostel,
        rollNumber,
        roomNumber,
        slc
      });
      await newStudent.save();
    } else if (role === "Warden") {
      const { hostel } = req.body;
      const newWarden = new Warden({
        _id: newUser._id,
        name,
        email,
        contact,
        hostel
      });
      await newWarden.save();
    }

    res.json(newUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    await User.findByIdAndDelete(user_id);
    res.json("User deleted");
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteComplaint = async (req, res) => {
  try {
    const { complaint_id } = req.params;
    await Complaint.findByIdAndDelete(complaint_id);
    res.json("Complaint deleted");
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};