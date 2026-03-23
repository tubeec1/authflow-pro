import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PublicLayout from "./layout/PublicLayout";
import DashboardLayout from "./layout/DashboardLayout";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import AppProvider from "./context/AppProvider";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <RouterProvider router={router} />,
  </AppProvider>,
);
