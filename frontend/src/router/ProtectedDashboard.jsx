import { Navigate, useNavigate } from "react-router-dom";
import fetchProfileData from "../utils/fetchProfileData";
import { useEffect } from "react";
import React from "react";
import { useAuth } from "../context/AppProvider";

const ProtectedDashboard = ({ children }) => {
  let { login } = useAuth();
  let token = localStorage.getItem("token");
  let navigate = useNavigate();

  useEffect(() => {
    console.log("token is in here of protected rout", token);
    if (!token) {
      navigate("/login");
    }
    let fetch = async () => {
      let res = await fetchProfileData(token, login);
      console.log("res is in ", res);
      if (res == false) {
        navigate("/login");
      }
    };
    fetch();
  }, []);

  return children;
};

export default ProtectedDashboard;
