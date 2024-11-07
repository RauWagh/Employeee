const Employee = require('../models/Employee');

exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};
