// src/components/AddEmployee.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState([]);
  const [image, setImage] = useState(null);
  const history = useNavigate ();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobileNo', mobileNo);
    formData.append('designation', designation);
    formData.append('gender', gender);
    formData.append('course', course);
    if (image) formData.append('image', image);

    const token = localStorage.getItem('token');

    try {
      await axios.post('http://localhost:5000/api/employees', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      history.push('/dashboard'); // Redirect to dashboard after successful employee addition
    } catch (err) {
      console.error('Error adding employee', err);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile No."
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <select onChange={(e) => setGender(e.target.value)} value={gender}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
