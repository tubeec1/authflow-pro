import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../../context/AppProvider";
import { useNavigate, Link } from "react-router-dom";
import fetchProfileData from "../../utils/fetchProfileData";

const Header = () => {
  const { user, setUser, logout, isLogin } = useAuth();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const dropdownRef = useRef();

  // 🔥 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="w-full bg-white shadow px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* 🔹 Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-xl sm:text-2xl font-bold text-blue-600 cursor-pointer"
        >
          AuthFlow
        </h1>

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>

          {!isLogin ? (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
              <Link to="/signup" className="text-gray-700 hover:text-blue-600">
                Signup
              </Link>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              {/* 🔹 Profile Image */}
              <img
                src={`http://localhost:4000/${user.profile_image}`}
                alt="profile"
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-10 h-10 rounded-full object-cover cursor-pointer border"
              />

              {/* 🔹 Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg p-2 z-50 border">
                  <p className="px-3 py-2 text-sm text-gray-500">{user.name}</p>

                  <hr />

                  <p
                    onClick={() => {
                      navigate("/dashboard");
                      setProfileOpen(false);
                    }}
                    className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer rounded"
                  >
                    Dashboard
                  </p>

                  <p
                    onClick={() => {
                      navigate("/dashboard/profile");
                      setProfileOpen(false);
                    }}
                    className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer rounded"
                  >
                    Profile
                  </p>

                  <p
                    onClick={() => {
                      handleLogout();
                      setProfileOpen(false);
                    }}
                    className="px-3 py-2 text-sm text-red-500 hover:bg-gray-100 cursor-pointer rounded"
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 🔹 Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-3 md:hidden px-2">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          {!isLogin ? (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                Dashboard
              </Link>

              <Link to="/dashboard/profile" onClick={() => setMenuOpen(false)}>
                Profile
              </Link>

              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="text-left text-red-500"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
