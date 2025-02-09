import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AdminLogin } from "./pages/admin/AdminLogin.jsx";
import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter, Route, Routes } from "react-router";
import { AdminDashboard } from "./pages/admin/AdminDashboard.jsx";
import { ProductsManagement } from "./pages/admin/ProductsManagement.jsx";
import { OrdersManagement } from "./pages/admin/OrdersManagement.jsx";
// Supports weights 100-900
import '@fontsource-variable/inter';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <Routes>
          <Route path="admin">
            <Route path="login" element={<AdminLogin />} />

            <Route path="dashboard" element={<AdminDashboard />}>
              <Route path="home" element={<h1>home</h1>} />
              <Route path="products" element={<ProductsManagement />} />
              <Route path="orders" element={<OrdersManagement />} />
            </Route>
          </Route>
        </Routes>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>
);
