const express = require("express");
const cors = require("cors");
const app = express();
const { jwtVerifier } = require("../utils/jwtToken");
const Complaint = require("../models/complaint-model");
const Student = require("../models/std-model");
const Warden = require("../models/warden-model");
const Admin = require("../models/admin-model");

app.use(cors());
app.use(express.json());

const decodeUser = async (token) => {
  try {
    const decodedToken = jwtVerifier(token);
    console.log(decodedToken);

    const { id, type } = decodedToken.user;
    let userInfo;

    if (type === "student") {
      userInfo = await Student.findById(id);
    } else if (type === "warden") {
      userInfo = await Warden.findById(id);
    } else if (type === "admin") {
      userInfo = await Admin.findById(id);
    }

    return userInfo;
  } catch (err) {
    console.error("Error decoding token:", err.message);
  }
};

exports.postComplaints = async (req, res) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    const userInfo = await decodeUser(token);

    const { name, rollNumber, hostel, roomNumber } = userInfo;
    const { date, time, category, complaint, priority } = req.body;

    const newComplaint = new Complaint({
      date,
      time,
      category,
      complaint,
      priority,
      studentName: name,
      hostel,
      roomNumber,
      status: 'Open'
    });

    await newComplaint.save();
    res.json(newComplaint);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.putComplaintsById = async (req, res) => {
  const token = req.headers.authorization;
  const decodedToken = jwtVerifier(token);
  console.log(decodedToken);
  const { id, type } = decodedToken.user;

  try {
    const { id: complaintId } = req.params;

    if (type === "warden") {
      const updatedComplaint = await Complaint.findByIdAndUpdate(
        complaintId,
        { status: 'Resolved' },
        { new: true }
      );
      res.json(updatedComplaint);
    } else {
      res.status(404).json({ error: "Complaint not found" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllComplaintsByUser = async (req, res) => {
  const token = req.headers.authorization;
  console.log(token);
  const decodedToken = jwtVerifier(token);
  console.log(decodedToken);

  const { id, type } = decodedToken.user;

  try {
    if (type === "warden") {
      const allComplaints = await Complaint.find().sort({ date: -1 });
      res.json(allComplaints);
    } else if (type === "student") {
      const myComplaints = await Complaint.find({ studentName: id }).sort({ date: -1 });
      res.json(myComplaints);
    } else {
      res.status(403).json({ error: "Unauthorized" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUserType = async (req, res) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    const decodedToken = jwtVerifier(token);
    console.log(decodedToken);
    const { type } = decodedToken.user;

    res.json({ userType: type });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    const decodedToken = jwtVerifier(token);
    console.log(decodedToken);
    const { id, type } = decodedToken.user;

    let userDetails;

    if (type === "student") {
      userDetails = await Student.findById(id);
    } else if (type === "warden") {
      userDetails = await Warden.findById(id);
    }

    res.json(userDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteComplaints = async (req, res) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    const decodedToken = jwtVerifier(token);
    console.log(decodedToken);
    const { type } = decodedToken.user;
    const { id } = req.params;

    if (type === "warden") {
      await Complaint.findByIdAndDelete(id);
      res.json("Complaint deleted");
    } else {
      res.status(403).json({ error: "Unauthorized" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};