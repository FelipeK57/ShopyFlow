import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource-variable/onest";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Clients/Auth/Login.jsx";
import Register from "./pages/Clients/Auth/Register.jsx";
import LoginAdministrator from "./pages/Admin/LoginAdministrator.jsx";
import Profile from "./pages/Clients/Profile/Profile.jsx";
import Home from "./pages/Clients/Home.jsx";
import HomeAdmin from "./pages/Admin/HomeAdmin.jsx";
import Inventory from "./pages/Admin/components/Inventory.jsx";
import Orders from "./pages/Admin/components/Orders.jsx";
import Customers from "./pages/Admin/components/Customers.jsx";
import Support from "./pages/Admin/components/Support.jsx";

const router = createBrowserRouter([
  {
    // Home
    path: "/",
    element: <Home />,
  },
  {
    // Login clients
    path: "/login",
    element: <Login />,
  },
  {
    // Register clients
    path: "/register",
    element: <Register />,
  },
  {
    // Login administrators
    path: "/login-user/administrator",
    element: <LoginAdministrator />,
  },
  {
    // Home administrators
    path: "/home-user/administrator",
    element: <HomeAdmin />,
    // Routes for administrators
    children: [
      {
        // Modules
        path: "orders",
        element: <Orders />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "support",
        element: <Support />,
      },
    ],
  },
  {
    // Profile users
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
