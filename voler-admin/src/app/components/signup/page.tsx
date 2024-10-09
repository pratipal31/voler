"use client"; // Client Component
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import { db } from "../../../firebase/firebaseConfig"; // Import the Firestore database
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions

const SignUp = () => {
  const router = useRouter(); // Initialize useRouter
  const [type, setType] = useState<"Person" | "Organization">("Person");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    phone: "",
    email: "",
    location: "",
  });
  const [alertVisible, setAlertVisible] = useState(false); // State for alert visibility

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Determine the collection based on the user type
      const collectionName = type === "Person" ? "Person" : "Organization";
      // Add document to the respective collection
      await addDoc(collection(db, collectionName), formData);
      console.log("Form data submitted:", { type, ...formData });

      // Reset form data after submission
      setFormData({
        name: "",
        description: "",
        phone: "",
        email: "",
        location: "",
      });

      // Show alert message
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 3000); // Hide alert after 3 seconds

      // Navigate to the login page after successful submission
      router.push("../../components/login");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
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

        {/* Alert Box */}
        {alertVisible && (
          <div className="mb-4 p-4 text-green-800 bg-green-100 rounded-lg shadow-md">
            Data successfully sent!
          </div>
        )}

        {/* Type Selector: Person or Organization */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-center">Register As</label>
          <div className="flex justify-between">
            <button
              type="button"
              className={`px-4 py-2 rounded ${
                type === "Person" ? "bg-blue-600 text-white" : "bg-gray-300"
              }`}
              onClick={() => setType("Person")}
            >
              Person
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded ${
                type === "Organization"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => setType("Organization")}
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
              placeholder={`Enter ${
                type === "Person" ? "your" : "organization"
              } name`}
            />
          </div>

          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder={`Enter ${
                type === "Person" ? "your" : "organization"
              } name`}
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

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password} // Assuming you have a state for password
              onChange={handleChange} // Function to handle input changes
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your password"
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
