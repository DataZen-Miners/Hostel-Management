const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  time: { type: String, required: true },
  category: { type: String, required: true },
  complaint: { type: String, required: true },
  priority: { type: String, enum: ['High', 'Medium', 'Low'], required: true },
  studentName: { type: String, required: true },
  hostel: { type: String, required: true },
  roomNumber: { type: String, required: true },
  status: { type: String, enum: ['Open', 'In Progress', 'Resolved'], default: 'Open' }
});

module.exports = mongoose.model('Complaint', complaintSchema);