const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  department: {
    type: String,
    enum: ["HR", "IT", "Finance", "Marketing"]
  },
  designation: String,
  salary: {
    type: Number,
    required: true,
    min: 0
  },
  dateOfJoining: Date,
  employmentType: {
    type: String,
    enum: ["Full-time", "Part-time", "Contract"]
  },
  status: {
    type: String,
    default: "Active"
  }
}, { timestamps: true });

module.exports = mongoose.model("Employee", employeeSchema);