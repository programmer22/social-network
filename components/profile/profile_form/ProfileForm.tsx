// components/CreateProfile.js
import React, { useState } from 'react';

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    // email: '',           Don't need this becauses you can get it from clerk 
    // password: '',         Don't need this becauses you can get it from clerk 
    dateOfBirth: '',
    sex: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform client-side validation if necessary

    try {
      const response = await fetch('/api/createprofile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful profile creation
        console.log('Profile created:', data);
        // Redirect to another page or show success message
      } else {
        // Handle errors
        console.error('Profile creation failed:', data.message);
        // Show error message to the user
      }
    } catch (error) {
      console.error('Network error:', error);
      // Show network error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        required
      />
      <select name="sex" value={formData.sex} onChange={handleChange} required>
        <option value="">Select Sex</option>
        <option value="m">Male</option>
        <option value="f">Female</option>
      </select>
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default CreateProfile;
