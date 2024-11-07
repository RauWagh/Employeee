// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes for routing
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AddEmployee from './components/AddEmployee';
import NotFound from './components/NotFound'; // Ensure the path is correct

const App = () => {
  // Initialize state for employees
  const [employees, setEmployees] = useState([]);

  // Function to add employee to the list
  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]); // Update employees list
  };

  return (
    <Router>
      <Routes>
        {/* Default route for Dashboard */}
        <Route path="/" element={<Dashboard employees={employees} />} /> 

        {/* Route for Login */}
        <Route path="/login" element={<Login />} />

        {/* Route for Register */}
        <Route path="/register" element={<Register />} />

        {/* Route for adding new employees */}
        <Route path="/add-employee" element={<AddEmployee addEmployee={addEmployee} />} />

        {/* Catch-all route for unmatched URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
