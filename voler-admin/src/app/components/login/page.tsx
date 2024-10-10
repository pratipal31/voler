"use client"; // Client Component

import React, { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [identifier, setIdentifier] = useState(""); // Changed email to identifier
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For displaying error messages

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Clear previous error

    try {
      const response = await fetch("/api/login/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }), // Send identifier instead of email
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        // Redirect user to another page after successful login
        window.location.href = "../../components/home"; // Redirect to your dashboard or homepage
      } else {
        setError(data.error || "Login failed"); // Show the error message
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred while logging in");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/background.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div className="w-full max-w-md p-8 bg-gray-200 rounded-lg shadow-md relative z-10">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="identifier">
              Email
            </label>
            <input
              type="text" // Change type to text for more flexibility
              id="identifier" // Changed id
              value={identifier} // Bind identifier instead of email
              onChange={(e) => setIdentifier(e.target.value)} // Update state
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email, phone number, or username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between mt-4">
          <Link
            href="/forgot-password"
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
          <Link
            href="../../components/signup"
            className="text-blue-600 hover:underline"
          >
            Register Here?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
