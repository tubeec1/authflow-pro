import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { initialValue } from "../reducers/authReducer";
import authReducer from "../reducers/authReducer";

export let ApppContext = createContext(null);
const AppProvider = ({ children }) => {
  let [state, dispatch] = useReducer(authReducer, initialValue);

  let login = (data) => {
    dispatch({
      type: "LOGIN",
      payload: { user: data.user, token: data.token, isValidToken: true },
    });
  };

  let logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
  };

  let value = {
    user: state.user,
    token: state.token,
    isLogin: state.isLogin,
    isValidToken: state.isValidToken,
    login,
    logout,
  };

  return <ApppContext.Provider value={value}>{children}</ApppContext.Provider>;
};

export let useAuth = () => useContext(ApppContext);

export default AppProvider;
