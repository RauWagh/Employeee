// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const response = await axios.get('http://localhost:5000/api/employees', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEmployees(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching employees', err);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEmployees(employees.filter((emp) => emp._id !== id));
    } catch (err) {
      console.error('Error deleting employee', err);
    }
  };

  // Function to add new employee to the list without refetching from the API
  const addNewEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  return (
    <div>
      <h2>Employee Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Link to="/add-employee">Add Employee</Link>
          <ul>
            {employees.map((employee) => (
              <li key={employee._id}>
                {employee.name} - {employee.designation}
                <button onClick={() => handleDelete(employee._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
