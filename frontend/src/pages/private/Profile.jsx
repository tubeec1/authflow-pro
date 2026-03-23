import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AppProvider";
import { useNavigate } from "react-router-dom";
import fetchProfileData from "../../utils/fetchProfileData";

const Profile = () => {
  const { user, login } = useAuth();
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profile_image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    let data = new FormData();
    data.append("name", formData.name);
    data.append("password", formData.password);
    data.append("profile_image", formData.profile_image);
    data.append("email", formData.email);
    let fetchAPI = async (d) => {
      let res = await fetch("http://localhost:4000/api/users/me-update", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: d,
      });
      let data = await res.json();
      if (data.status) {
        alert(data.message);
        fetchProfileData(token, login);
      } else {
        alert(data.message);
      }
    };
    fetchAPI(data);
  };

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* 🔹 Profile Info Card */}
      <div className="bg-white p-6 rounded-xl shadow flex flex-col sm:flex-row items-center gap-6">
        {/* Avatar */}

        <img
          src={`http://localhost:4000/${user?.profile_image}`}
          alt="profile"
          className="w-20 h-20 rounded-full object-cover"
        />

        {/* Info */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold text-gray-800">{user?.name}</h2>
          <p className="text-gray-500 text-sm">{user?.email}</p>
          <span className="inline-block mt-2 px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
            {user?.role || "User"}
          </span>
        </div>
      </div>

      {/* 🔹 Update Form */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Update Profile
        </h3>

        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Name</label>
            {console.log("user in profiel", user?.name)}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">New Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col sm:col-span-2">
            <label className="text-sm text-gray-600 mb-1">Profile Image</label>
            <input
              type="file"
              name="image"
              onChange={(e) =>
                setFormData({ ...formData, profile_image: e.target.files[0] })
              }
              className="text-sm"
            />
          </div>

          {/* Button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
