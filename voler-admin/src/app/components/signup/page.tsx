"use client"; // Client Component
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import { db } from "../../../firebase/firebaseConfig"; // Import the Firestore database
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions

const SignUp = () => {
  const router = useRouter(); // Initialize useRouter for navigation
  const [type, setType] = useState<"Person" | "Organization">("Person"); // Type state
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    description: "",
    phone: "",
    email: "",
    location: "",
    password: "",
  }); // Form data state
  const [alertVisible, setAlertVisible] = useState(false); // State for alert visibility

  // Handle form field changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Determine the collection based on user type for Firebase
      const collectionName = type === "Person" ? "Person" : "Organization";

      // Add document to the respective collection in Firestore
      await addDoc(collection(db, collectionName), formData);
      console.log("Form data submitted to Firebase:", { type, ...formData });

      // Send data to the backend API to be saved in MongoDB using Prisma
      const response = await fetch("/api/signup/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type, formData }),
      });

      // Check if MongoDB submission was successful
      if (response.ok) {
        console.log("Form data submitted to MongoDB via API");
      } else {
        const errorData = await response.json();
        console.error("Error submitting data to MongoDB:", errorData);
      }

      // Reset form data after submission
      setFormData({
        name: "",
        username: "",
        description: "",
        phone: "",
        email: "",
        location: "",
        password: "",
      });

      // Show success alert
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
          <label className="block text-gray-700 mb-2 text-center">
            Register As
          </label>
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
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
