import React from "react";
import { useAuth } from "../../context/AppProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
  let { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* 🔹 Welcome Section */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Welcome back, {user?.name || "User"} 👋
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Here’s what’s happening with your account today.
        </p>
      </div>

      {/* 🔹 Stats Cards */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <h4 className="text-gray-500 text-sm">Account Status</h4>
          <p className="text-lg font-semibold text-green-600 mt-2">Active</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <h4 className="text-gray-500 text-sm">Email</h4>
          <p className="text-sm font-medium text-gray-800 mt-2 break-words">
            {user?.email || "example@email.com"}
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <h4 className="text-gray-500 text-sm">User Role</h4>
          <p className="text-lg font-semibold text-blue-600 mt-2">
            {user?.role || "User"}
          </p>
        </div>
      </div>

      {/* 🔹 Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Quick Actions
        </h3>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/dashboard/profile"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Update Profile
          </Link>
        </div>
      </div>

      {/* 🔹 Activity / Info Section */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Account Info
        </h3>

        <div className="space-y-2 text-sm sm:text-base text-gray-600">
          <p>
            <span className="font-medium text-gray-800">Name:</span>{" "}
            {user?.name}
          </p>
          <p>
            <span className="font-medium text-gray-800">Email:</span>{" "}
            {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
