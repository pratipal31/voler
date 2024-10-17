"use client";
import React, { useState } from "react";
import Link from "next/link";

const Alert = ({}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    organizationId: "",
    skillsNeeded: "",
    location: "",
    alertType: "",
    notification: "",
    startDateTime: "",
    endDateTime: "",
  });

  const [errors, setErrors] = useState<{
    [key in keyof typeof formData]?: string;
  }>({});
  const user = "Pratipal"; // You can dynamically fetch or set the username

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [key in keyof typeof formData]?: string } = {};

    // Validate required fields
    (Object.keys(formData) as (keyof typeof formData)[]).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Submit the form data
      console.log("Form submitted:", formData);
      // Reset form
      setFormData({
        title: "",
        description: "",
        organizationId: "",
        skillsNeeded: "",
        location: "",
        alertType: "",
        notification: "",
        startDateTime: "",
        endDateTime: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <nav className="bg-gray-800 text-white h-screen w-64 p-5 fixed">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li>
            <Link
              href="../../components/home"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="../../components/inventory"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Inventory
            </Link>
          </li>
          <li>
            <Link
              href="../../components/alerts"
              className="block px-3 py-2 rounded bg-gray-700" // Active class for Inventory
            >
              Alerts
            </Link>
          </li>
          <li>
            <Link
              href="../../components/displayalerts"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Display Alerts
            </Link>
          </li>
          <li>
            <Link
              href="../../components/Organization"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Organisations
            </Link>
          </li>
          <li>
            <Link
              href="../../components/signup"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Log Out
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow ml-64">
        {/* Sticky Horizontal Navbar */}
        <div className="bg-gray-800 text-white p-4 shadow-md mb-4 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Welcome, {user}</h1>
            <div className="flex items-center space-x-4 text-black">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Alert Form Section */}
        <div className="flex justify-center items-center h-full p-4">
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Alerts</h1>
            {(Object.keys(formData) as (keyof typeof formData)[]).map((key) => (
              <div key={key} className="flex flex-col mb-4">
                <label className="block text-md font-medium mb-1">
                  {key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/([A-Z])/g, " $1")}
                  : {/* Format the label */}
                </label>
                {key === "description" ? (
                  <textarea
                    name={key}
                    value={formData[key] as string}
                    onChange={handleChange}
                    required
                    className="border rounded p-2 w-full h-24 resize-none text-md" // Set a smaller width and height for description
                  />
                ) : (
                  <input
                    type={key.includes("Date") ? "datetime-local" : "text"}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    required
                    className="border rounded p-2 w-full text-md" // Set a smaller width
                  />
                )}
                {errors[key] && (
                  <span className="text-red-500 text-sm">{errors[key]}</span>
                )}
              </div>
            ))}

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Submit Alert
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Alert;
