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

const router = createBrowserRouter([
  {
    //Home
    path: "/",
    element: <Home />,
  },
  {
    //Login clients
    path: "/login",
    element: <Login />,
  },
  {
    //Register clients
    path: "/register",
    element: <Register />,
  },
  {
    //Login administrators
    path: "/login-user/administrator",
    element: <LoginAdministrator />,
  },
  {
    //Home administrators
    path: "/home-user/administrator",
    element: <HomeAdmin />,
  },
  {
    //Profile users
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
