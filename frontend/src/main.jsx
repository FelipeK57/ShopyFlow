import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource-variable/onest";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Clients/Auth/Login.jsx";
import Register from "./pages/Clients/Auth/Register.jsx";
import LoginAdministrator from "./pages/Admin/LoginAdministrator.jsx";

const router = createBrowserRouter([
  {
    //Home
    path: "/",
    element: <h1>Hola</h1>,
  },
  {
    //Login clients
    path: "/login",
    element: <Login />,
  },
  { //Register clients
    path: "/register",
    element: <Register />,
  },
  {
    //Login adminstrators
    path: "/login-user/administrator",
    element: <LoginAdministrator/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
