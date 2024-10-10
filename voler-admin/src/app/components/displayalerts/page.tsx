"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCookie, deleteCookie } from "cookies-next"; // Import the necessary functions for cookies
import { Alert } from "@prisma/client"; // Ensure the Alert type is imported from Prisma

const HomePage = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [user, setUser] = useState("User");
  const [alerts, setAlerts] = useState<Alert[]>([]); // State to hold alerts

  useEffect(() => {
    const userSession = getCookie("userSession"); // Get the user session from cookies
    if (userSession) {
      setUser(JSON.parse(userSession).name);
    }

    // Fetch alerts data
    const fetchAlerts = async () => {
      try {
        const response = await fetch("/api/alert/route");
        const data = await response.json();
        setAlerts(data); // Set the alerts state
      } catch (error) {
        console.error("Failed to fetch alerts:", error);
      }
    };

    fetchAlerts();
  }, []);

  const handleLogout = () => {
    deleteCookie("userSession"); // Remove the session cookie
    window.location.href = "../../components/login"; // Redirect to the login page
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
              onClick={() => setActivePage("dashboard")}
              className={`block px-3 py-2 rounded hover:bg-gray-700 ${
                activePage === "dashboard" ? "bg-gray-700" : ""
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="../../components/inventory"
              onClick={() => setActivePage("inventory")}
              className={`block px-3 py-2 rounded hover:bg-gray-700 ${
                activePage === "inventory" ? "bg-gray-700" : ""
              }`}
            >
              Inventory
            </Link>
          </li>
          <li>
            <Link
              href="../../components/alerts"
              onClick={() => setActivePage("alerts")}
              className={`block px-3 py-2 rounded hover:bg-gray-700 ${
                activePage === "alerts" ? "bg-gray-700" : ""
              }`}
            >
              Alerts
            </Link>
          </li>
          <li>
            <Link
              href="../../components/displayalerts"
              onClick={() => setActivePage("display-alerts")}
              className={`block px-3 py-2 rounded hover:bg-gray-700 ${
                activePage === "display-alerts" ? "bg-gray-700" : ""
              }`}
            >
              Display Alerts
            </Link>
          </li>
          <li>
            <Link
              href="../../components/displayalerts"
              onClick={() => setActivePage("organisations")}
              className={`block px-3 py-2 rounded hover:bg-gray-700 ${
                activePage === "organisations" ? "bg-gray-700" : ""
              }`}
            >
              Organisations
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Log Out
            </button>
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

        {/* Alerts Display */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Alerts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="border rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold">{alert.title}</h3>
                <p>{alert.description}</p>
                <p className="text-sm text-gray-500">
                  Location: {alert.location}
                </p>
                <p className="text-sm text-gray-500">
                  Skills Needed: {alert.skillsNeeded.join(", ")}
                </p>
                <p className="text-sm text-gray-500">
                  Start: {new Date(alert.startDateTime).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  End: {new Date(alert.endDateTime).toLocaleString()}
                </p>
                <Link href="../../components/volunteer">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mt-4">
                    View Volunteers
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
