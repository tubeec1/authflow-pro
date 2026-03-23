import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { ApppContext, useAuth } from "../../context/AppProvider";
import Footer from "../../components/public/Footer";

const Login = () => {
  let { user, login } = useAuth();

  let [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  let [validationError, setValidationError] = useState("");
  let navigate = useNavigate();

  let handleSubmit = (event) => {
    event.preventDefault();
    if (!userData.email) {
      setValidationError("Enter your email");
      return;
    } else if (!userData.password) {
      setValidationError("Enter your password");
      return;
    }
    setValidationError("");
    createuserFetching(user);
  };

  let createuserFetching = async (user) => {
    let res = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    let data = await res.json();

    if (data.status) {
      alert(data.message);
      setUserData({
        email: "",
        password: "",
      });
      localStorage.setItem("token", data.token);
      login(data);

      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full">
        {/* Form Section */}
        <div className="p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Sign in</h1>
          {validationError != "" && (
            <div className="text-red-400 p-3 my-4 text-center">
              <span className="text-center">{validationError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            New User Registeration{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:underline"
            >
              Signup
            </Link>
          </p>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center justify-center bg-blue-900 text-white p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">Welcome Back!</h2>
            <p className="text-sm opacity-90">
              Join our platform and start learning today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
