import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Login from "../pages/public/Login";
import Signup from "../pages/public/Signup";
import React from "react";
import Home from "../pages/public/Home";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/private/dashboard";
import Profile from "../pages/private/Profile";
import Setting from "../pages/private/Setting";
import ProtectedDashboard from "./protectedDashboard";

let router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedDashboard>
        <DashboardLayout />
      </ProtectedDashboard>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
]);

export default router;
