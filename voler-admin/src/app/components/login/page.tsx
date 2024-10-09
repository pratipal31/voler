"use client"; // Client Component

import React, { useState } from 'react';
import Link from 'next/link';
import SignUp from '../signup/page';
import HomePage from '../home/page';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
        {/* Optional: Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div className="w-full max-w-md p-8 bg-gray-200 rounded-lg shadow-md relative z-10">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
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
          <Link href="../../components/home">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Login
          </button>
          </Link>
        </form>

        <div className="flex justify-between mt-4">
          <Link href="/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
          <Link href="../../components/signup" className="text-blue-600 hover:underline">
             Register Here?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;