import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* 🔹 Header */}
      <Header setIsOpen={setIsOpen} />

      {/* 🔹 Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* 🔹 Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* 🔹 Mobile Sidebar */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Sidebar */}
            <div className="w-64 bg-white h-full shadow-lg p-4 animate-slideIn">
              <Sidebar setIsOpen={setIsOpen} />
            </div>

            {/* Overlay */}
            <div
              className="flex-1 bg-black bg-opacity-30"
              onClick={() => setIsOpen(false)}
            ></div>
          </div>
        )}

        {/* 🔹 Main Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
