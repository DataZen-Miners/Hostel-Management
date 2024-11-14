const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
const { jwtGenerator } = require("../utils/jwtToken");
const User = require("../models/user-model");
const Student = require("../models/std-model");
const Warden = require("../models/warden-model");

app.use(cors());
app.use(express.json());

exports.userRegister = async (req, res) => {
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
      role: role.toLowerCase() // Ensure role is in lowercase
    });

    await newUser.save();

    const jwtToken = jwtGenerator(newUser._id, newUser.role);

    if (role.toLowerCase() === "student") {
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
    } else if (role.toLowerCase() === "warden") {
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

    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json("Invalid Credential");
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }

    const jwtToken = jwtGenerator(user._id, user.role);
    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};