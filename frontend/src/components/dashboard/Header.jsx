import React from "react";
import { useAuth } from "../../context/AppProvider";
import { useNavigate } from "react-router-dom";

const Header = ({ setIsOpen }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white shadow px-4 sm:px-6 py-4 flex items-center justify-between">
      {/* 🔹 Left */}
      <h1 className="text-lg sm:text-2xl font-semibold text-gray-800">
        AuthFlow Dashboard
      </h1>

      {/* 🔹 Right */}
      <div className="flex items-center gap-3">
        {/* 🔹 Hamburger (mobile only) */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-2xl">
          ☰
        </button>

        {/* 🔹 Profile */}
        {user && (
          <div
            onClick={() => {
              navigate("/dashboard/profile");
              setIsOpen(false); // ✅ close on mobile
            }}
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg transition"
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            <span className="hidden sm:block text-sm font-medium text-gray-700">
              {user.name}
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
