"use client";
import React, { useState } from "react";
import Link from "next/link";

const Organization = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [resourceName, setResourceName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State to show success alert

  const organizations = [
    {
      name: "Red Cross",
      details:
        "A humanitarian organization providing emergency assistance and disaster relief.",
      imageUrl: "/redcross.jpg", // Replace with actual image URL if available
    },
    {
      name: "Doctors Without Borders",
      details:
        "A medical humanitarian organization that provides care in conflict zones.",
      imageUrl: "/doctor.jpg",
    },
    {
      name: "UNICEF",
      details: "The United Nations Children's Fund works to improve children's welfare.",
      imageUrl: "/unicef.jpg",
    },
    {
      name: "World Food Programme",
      details: "An organization focused on hunger relief and food security around the world.",
      imageUrl: "/food.jpg",
    },
  ];

  // Function to open the modal and set the selected organization
  const openModal = (org) => {
    setSelectedOrg(org);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setResourceName("");
    setQuantity("");
  };

  // Function to handle resource request form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Resource Name:", resourceName);
    console.log("Quantity:", quantity);
    console.log("Organization:", selectedOrg.name);

    // Display success alert
    setShowSuccessAlert(true);

    // Close the modal and clear form fields
    closeModal();

    // Hide the success alert after 3 seconds
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar Navigation */}
      <nav className="bg-gray-800 text-white h-screen w-64 p-5 fixed shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li>
            <Link
              href="../../components/home"
              className="block px-3 py-2 rounded hover:bg-blue-600 transition"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="../../components/inventory"
              className="block px-3 py-2 rounded hover:bg-blue-600 transition"
            >
              Inventory
            </Link>
          </li>
          <li>
            <Link
              href="../../components/alerts"
              className="block px-3 py-2 rounded hover:bg-blue-600 transition"
            >
              Alerts
            </Link>
          </li>
          <li>
            <Link
              href="../../components/display-alerts"
              className="block px-3 py-2 rounded hover:bg-blue-600 transition"
            >
              Display Alerts
            </Link>
          </li>
          <li>
            <Link
              href="/admin/organisations"
              className="block px-3 py-2 rounded hover:bg-blue-600 transition"
            >
              Organisations
            </Link>
          </li>
          <li>
            <Link
              href="../../components/signup"
              className="block px-3 py-2 rounded hover:bg-blue-600 transition"
            >
              Log Out
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow pl-64">
        {/* Sticky Horizontal Navbar */}
        <div className="bg-gray-800 text-white p-4 shadow-md mb-4 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Welcome, Pratipal</h1>
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

        {/* Organization Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              {/* Organization Image */}
              <img
                src={org.imageUrl}
                alt={org.name}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-bold mb-4">{org.name}</h2>
              <p className="text-gray-700 mb-4">{org.details}</p>
              <button
                onClick={() => openModal(org)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Request Resources
              </button>
            </div>
          ))}
        </div>

        {/* Success Alert */}
        {showSuccessAlert && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
            Resource request sent successfully!
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">
              Request Resources for {selectedOrg?.name}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Resource Name</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                  value={resourceName}
                  onChange={(e) => setResourceName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Quantity</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Organization;
