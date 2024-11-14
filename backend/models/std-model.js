const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  slc: { type: Boolean, default: false },
  hostel: { type: String, required: true },
  roomNumber: { type: String, required: true }
});

module.exports = mongoose.model('Student', studentSchema);