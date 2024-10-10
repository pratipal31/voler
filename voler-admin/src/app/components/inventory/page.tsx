"use client";
import React, { useState } from "react";
import Link from "next/link";

const Inventory = () => {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Resource A",
      qty: 10,
      type: "Type 1",
      description: "Description A",
    },
    {
      id: 2,
      name: "Resource B",
      qty: 5,
      type: "Type 2",
      description: "Description B",
    },
  ]);

  const [newResource, setNewResource] = useState({
    id: "",
    name: "",
    qty: "",
    type: "",
    description: "",
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewResource({ ...newResource, [name]: value });
  };

  const addResource = () => {
    if (
      newResource.name &&
      newResource.qty &&
      newResource.type &&
      newResource.description
    ) {
      setInventory([
        ...inventory,
        { ...newResource, id: inventory.length + 1 },
      ]);
      setNewResource({ id: "", name: "", qty: "", type: "", description: "" });
      setIsDialogOpen(false); // Close the dialog after adding
    } else {
      alert("Please fill in all fields before adding a resource.");
    }
  };

  const deleteResource = (id) => {
    setInventory(inventory.filter((resource) => resource.id !== id));
  };

  const addQuantity = (id) => {
    setInventory(
      inventory.map((resource) =>
        resource.id === id ? { ...resource, qty: resource.qty + 1 } : resource
      )
    );
  };

  const removeQuantity = (id) => {
    setInventory(
      inventory
        .map((resource) => {
          if (resource.id === id) {
            const newQty = resource.qty - 1;
            return newQty > 0 ? { ...resource, qty: newQty } : null; // Return null if quantity is 0
          }
          return resource;
        })
        .filter(Boolean)
    ); // Filter out null values
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Implementation */}
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
                className="block px-3 py-2 rounded bg-gray-700" // Active class for Inventory
              >
                Inventory
              </Link>
            </li>
            <li>
              <Link
                href="../../components/alerts"
                className="block px-3 py-2 rounded hover:bg-gray-700"
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
                onClick={() => setActivePage("signup")}
                className="block px-3 py-2 rounded hover:bg-gray-700"
              >
                Log Out
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sticky Horizontal Navbar */}
        <div className="flex-grow ml-64">
          <div className="bg-gray-800 text-white p-4 shadow-md mb-4 sticky top-0 z-10">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Welcome, Pratipal</h1>
              <div className="flex items-center space-x-4">
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

          <div className="p-6 pt-4 space-y-6">
            {" "}
            {/* Space below the navbar */}
            <h1 className="text-2xl font-bold mb-4 text-center">Inventory</h1>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-3">Add New Resource</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  value={newResource.name}
                  onChange={handleInputChange}
                  placeholder="Resource Name"
                  className="p-2 border rounded"
                />
                <input
                  type="number"
                  name="qty"
                  value={newResource.qty}
                  onChange={handleInputChange}
                  placeholder="Quantity"
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  name="type"
                  value={newResource.type}
                  onChange={handleInputChange}
                  placeholder="Type"
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  name="description"
                  value={newResource.description}
                  onChange={handleInputChange}
                  placeholder="Description"
                  className="p-2 border rounded"
                />
              </div>
              <button
                onClick={() => setIsDialogOpen(true)} // Open the dialog
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Add Resource
              </button>
            </div>
            {/* Resource Dialog */}
            {isDialogOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded shadow-lg">
                  <h2 className="text-xl font-semibold mb-3">
                    Add New Resource
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="name"
                      value={newResource.name}
                      onChange={handleInputChange}
                      placeholder="Resource Name"
                      className="p-2 border rounded"
                    />
                    <input
                      type="number"
                      name="qty"
                      value={newResource.qty}
                      onChange={handleInputChange}
                      placeholder="Quantity"
                      className="p-2 border rounded"
                    />
                    <input
                      type="text"
                      name="type"
                      value={newResource.type}
                      onChange={handleInputChange}
                      placeholder="Type"
                      className="p-2 border rounded"
                    />
                    <input
                      type="text"
                      name="description"
                      value={newResource.description}
                      onChange={handleInputChange}
                      placeholder="Description"
                      className="p-2 border rounded"
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={() => setIsDialogOpen(false)} // Close the dialog
                      className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={addResource} // Add resource
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                <thead>
                  <tr className="bg-gray-200 text-left text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6">Resource ID</th>
                    <th className="py-3 px-6">Resource Name</th>
                    <th className="py-3 px-6">Quantity</th>
                    <th className="py-3 px-6">Type</th>
                    <th className="py-3 px-6">Description</th>
                    <th className="py-3 px-6">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm">
                  {inventory.length > 0 ? (
                    inventory.map((resource) => (
                      <tr
                        key={resource.id}
                        className="border-b border-gray-200 hover:bg-gray-100"
                      >
                        <td className="py-3 px-6">{resource.id}</td>
                        <td className="py-3 px-6">{resource.name}</td>
                        <td className="py-3 px-6">{resource.qty}</td>
                        <td className="py-3 px-6">{resource.type}</td>
                        <td className="py-3 px-6">{resource.description}</td>
                        <td className="py-3 px-6 flex space-x-2">
                          <button
                            onClick={() => addQuantity(resource.id)}
                            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition"
                          >
                            Add
                          </button>
                          <button
                            onClick={() => removeQuantity(resource.id)}
                            className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 transition"
                          >
                            Remove
                          </button>
                          <button
                            onClick={() => deleteResource(resource.id)}
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="py-3 px-6 text-center">
                        No resources available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
