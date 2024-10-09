"use client"; // Client Component
import React, { useState } from 'react';

const SignUp = () => {
  // State to handle the type of user and form data
  const [type, setType] = useState('Person');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    phone: '',
    email: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as sending the data to an API
    console.log('Form data:', { type, ...formData });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/background2.jpg')", // Replace with your image URL
      }}
    >
      <div className="w-full max-w-md p-8 bg-white bg-opacity-80 rounded-lg shadow-md relative z-10">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

        {/* Type Selector: Person or Organization */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Register As</label>
          <div className="flex justify-between">
            <button
              type="button"
              className={`px-4 py-2 rounded ${type === 'Person' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
              onClick={() => setType('Person')}
            >
              Person
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded ${type === 'Organization' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
              onClick={() => setType('Organization')}
            >
              Organization
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder={`Enter ${type === 'Person' ? 'your' : 'organization'} name`}
            />
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Brief description (optional)"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>

          {/* Location Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your location"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
