import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/public/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* 🔹 Hero Section */}
      <section className="text-center py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Secure Authentication <br className="hidden sm:block" />
          Made Simple
        </h2>

        <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto mb-8 text-sm sm:text-base">
          AuthFlow is a full-stack authentication system with JWT, protected
          routes, and user profile management built using React, Node.js, and
          MySQL.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* 🔹 Features */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Features
        </h3>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="p-6 shadow rounded-xl hover:shadow-lg transition">
            <h4 className="text-lg sm:text-xl font-semibold mb-2">
              🔐 Secure Auth
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              JWT-based authentication with hashed passwords for strong
              security.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl hover:shadow-lg transition">
            <h4 className="text-lg sm:text-xl font-semibold mb-2">
              🛡 Protected Routes
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Only authenticated users can access private dashboard features.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl hover:shadow-lg transition">
            <h4 className="text-lg sm:text-xl font-semibold mb-2">
              👤 User Profiles
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              View and update user information بسهولة وبشكل آمن.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 How It Works */}
      <section className="py-16 px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          How It Works
        </h3>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto text-center">
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2">
              1. Sign Up
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Create your account securely.
            </p>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2">2. Login</h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Authenticate using JWT tokens.
            </p>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2">
              3. Dashboard
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Access protected features safely.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Tech Stack */}
      <section className="py-16 px-4 sm:px-6 bg-white text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">Tech Stack</h3>
        <p className="text-gray-600 text-sm sm:text-base">
          React • Node.js • Express • MySQL • JWT • Tailwind CSS
        </p>
      </section>

      {/* 🔹 CTA */}
      <section className="py-16 sm:py-20 text-center bg-blue-600 text-white px-4">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Start Building Secure Apps Today
        </h3>

        <p className="mb-6 text-sm sm:text-base">
          Experience a modern authentication system for real-world applications.
        </p>

        <Link
          to="/signup"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Create Account
        </Link>
      </section>
    </div>
  );
};

export default Home;
