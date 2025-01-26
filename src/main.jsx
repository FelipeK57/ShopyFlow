import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AdminLogin } from "./pages/admin/AdminLogin.jsx";
import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <Routes>
          <Route path="admin">
            <Route path="login" element={<AdminLogin />} />
          </Route>
        </Routes>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>
);
