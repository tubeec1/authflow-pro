import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    twoFactorAuth: false,
  });
  let navigate = useNavigate();

  const handleToggle = (field) => {
    setSettings({ ...settings, [field]: !settings[field] });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* 🔹 Page Title */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Settings</h2>
        <p className="text-gray-500 text-sm">
          Manage your account preferences and security settings.
        </p>
      </div>

      {/* 🔹 Preferences Card */}
      <div className="bg-white p-6 rounded-xl shadow space-y-6">
        <h3 className="text-lg font-semibold text-gray-800">Preferences</h3>

        {/* Email Notifications */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-700">Email Notifications</h4>
            <p className="text-sm text-gray-500">
              Receive updates and alerts via email.
            </p>
          </div>

          <button
            onClick={() => handleToggle("emailNotifications")}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              settings.emailNotifications ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                settings.emailNotifications ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Two Factor */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-700">
              Two-Factor Authentication
            </h4>
            <p className="text-sm text-gray-500">
              Add extra security to your account.
            </p>
          </div>

          <button
            onClick={() => handleToggle("twoFactorAuth")}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              settings.twoFactorAuth ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                settings.twoFactorAuth ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* 🔹 Security Card */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Security</h3>

        <button
          className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Logout from all devices
        </button>
      </div>

      {/* 🔹 Danger Zone */}
      <div className="bg-white p-6 rounded-xl shadow border border-red-200 space-y-4">
        <h3 className="text-lg font-semibold text-red-600">Danger Zone</h3>

        <p className="text-sm text-gray-500">
          Once you delete your account, there is no going back.
        </p>

        <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Setting;
