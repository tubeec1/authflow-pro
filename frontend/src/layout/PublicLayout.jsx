import { Outlet, Link } from "react-router-dom";
import React, { useEffect } from "react";
import Header from "../components/public/Header";
import { useAuth } from "../context/AppProvider";
import fetchProfileData from "../utils/fetchProfileData";
import Footer from "../components/public/Footer";

const PublicLayout = () => {
  let { user, login, isValidToken } = useAuth();

  let token = localStorage.getItem("token");
  console.log("token", token);

  useEffect(() => {
    if (!user) {
      if (token) {
        let res = fetchProfileData(token, login);
        console.log("the res is here in public ", res);
      }
    }
  }, []);
  return (
    <div>
      <Header />
      {/* Page Content */}
      <main className="max-w-7xl mx-auto px-6 py-6">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default PublicLayout;
