import React, { useState } from "react";

const EmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new employee object
    const newEmployee = { name, role };

    // Pass the new employee data to the parent component (App.jsx)
    addEmployee(newEmployee);

    // Clear the form fields after submitting
    setName("");
    setRole("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Employee Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
