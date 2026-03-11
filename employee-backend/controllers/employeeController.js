const Employee = require("../models/Employee");

// Create Employee
exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(employee);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Employee
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(employee);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Employee
exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Employee deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search Employee
exports.searchEmployee = async (req, res) => {
  try {
    const { name } = req.query;

    const employees = await Employee.find({
      fullName: { $regex: name, $options: "i" }
    });

    res.status(200).json(employees);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};