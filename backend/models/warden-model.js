const mongoose = require('mongoose');

const wardenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  hostel: { type: String, required: true }
});

module.exports = mongoose.model('Warden', wardenSchema);