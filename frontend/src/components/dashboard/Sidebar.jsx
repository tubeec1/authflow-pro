import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AppProvider";

const Sidebar = ({ setIsOpen }) => {
  let { logout } = useAuth();
  let navigate = useNavigate();
  const linkStyle =
    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition";

  const activeStyle = "bg-blue-600 text-white";
  const inactiveStyle = "text-gray-600 hover:bg-gray-100";

  const handleClick = () => {
    if (setIsOpen) {
      setIsOpen(false); // ✅ CLOSE sidebar
    }
  };

  return (
    <aside className="bg-white h-full w-64 p-4 flex flex-col">
      {/* 🔹 Logo */}
      <h2 className="text-xl font-bold text-blue-600 mb-6">AuthFlow</h2>

      {/* 🔹 Links */}
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/dashboard"
          end
          onClick={handleClick}
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          🏠 Home
        </NavLink>

        <NavLink
          to="/dashboard/profile"
          onClick={handleClick}
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          👤 Profile
        </NavLink>

        <NavLink
          to="/dashboard/setting"
          onClick={handleClick}
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          ⚙️ Settings
        </NavLink>
        <button
          onClick={() => {
            logout();
            navigate("/login");
            handleClick(); // close sidebar (mobile)
          }}
          className={`${linkStyle} ${inactiveStyle} text-red-600 hover:bg-red-100`}
        >
          🚪 Logout
        </button>
      </nav>

      {/* 🔹 Footer */}
      <div className="mt-auto text-xs text-gray-400 pt-6">
        © {new Date().getFullYear()} AuthFlow
      </div>
    </aside>
  );
};

export default Sidebar;
