


import React, { useState, useEffect } from 'react';
import { useUser } from "@clerk/nextjs";
import { useRouter } from 'next/router';
import axios from 'axios'

const CreateProfile = () => {
  const { user } = useUser();
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: user?.email || '', // Set email from Clerk's user info
    dateOfBirth: '',
    sex: ''
  });

  useEffect(() => {
    // Update the form data if the user's email changes
    if (user?.email) {
      setFormData(formData => ({ ...formData, email: user.email }));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('/api/createProfile', formData);
    
        console.log('Profile created:', response.data);
        router.push('/'); // Redirect to homepage after profile creation
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Profile creation failed:', error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error:', error.message);
        }
      }
  };

  return (
    <div className="flex justify-center py-24">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
          className="my-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
          className="my-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          disabled // Email should be pre-filled and not editable
          className="my-2 p-2 border border-gray-300 rounded bg-gray-100"
        />
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
          className="my-2 p-2 border border-gray-300 rounded"
        />
        <select name="sex" value={formData.sex} onChange={handleChange} required className="my-2 p-2 border border-gray-300 rounded">
          <option value="">Select Sex</option>
          <option value="m">Male</option>
          <option value="f">Female</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateProfile;
