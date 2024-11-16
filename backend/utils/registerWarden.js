const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user-model");
const Warden = require("../models/warden-model");

const registerWarden = async () => {
  const wardenEmail = "warden@backup.com";
  const wardenPassword = "123456";
  const wardenName = "Warden Name";
  const wardenContact = "1234567890";
  const wardenHostel = "Hostel Name";

  try {
    await mongoose.connect("mongodb+srv://nottpande:pussy69@aditya.h8qrh.mongodb.net/?retryWrites=true&w=majority&appName=Aditya", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const existingUser = await User.findOne({ email: wardenEmail });

    if (existingUser) {
      console.log("Warden already exists!");
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(wardenPassword, salt);

    const newUser = new User({
      name: wardenName,
      email: wardenEmail,
      contact: wardenContact,
      password: bcryptPassword,
      role: "warden"
    });

    await newUser.save();

    const newWarden = new Warden({
      _id: newUser._id,
      name: wardenName,
      email: wardenEmail,
      contact: wardenContact,
      hostel: wardenHostel
    });

    await newWarden.save();

    console.log("Warden registered successfully!");
  } catch (err) {
    console.error(err.message);
  } finally {
    mongoose.connection.close();
  }
};

registerWarden();