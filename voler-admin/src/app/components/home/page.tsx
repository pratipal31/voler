"use client";
import React, { useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Link from "next/link";
import Inventory from "../inventory/page";
import Alert from "../alerts/page";
import SignUp from "../signup/page";
import { getCookie, deleteCookie } from "cookies-next"; // Import the necessary functions for cookies

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const HomePage = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [user, setUser] = useState("User");

  useEffect(() => {
    const userSession = getCookie("userSession"); // Get the user session from cookies
    if (userSession) {
      setUser(JSON.parse(userSession).name);
    }
  }, []);

  // Sample data for different charts
  const volunteerData = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Volunteers",
        data: [50, 100, 150, 200, 250, 300],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const eventsData = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Events",
        data: [5, 10, 15, 20, 30, 35],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  const alertsData = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Alerts",
        data: [100, 200, 250, 300, 400, 500],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(231, 76, 60, 0.6)",
        ],
      },
    ],
  };

  const growthData = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Growth Rate",
        data: [2, 4, 6, 8, 10, 12],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Alert Distribution Over the Years",
      },
    },
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Statistics Over Time",
      },
    },
  };

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

        {/* Chart Section */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Line Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Volunteer Growth</h2>
            <Line data={volunteerData} options={chartOptions} />
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Events Per Year</h2>
            <Bar data={eventsData} options={chartOptions} />
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-3 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Alerts Distribution</h2>
            <Pie data={alertsData} options={pieOptions} />
          </div>

          {/* Line Chart for Growth Rate */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Growth Rate</h2>
            <Line data={growthData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
