import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { ClerkProvider } from "@clerk/clerk-react";
import AppLayout from "./layouts/AppLayout.tsx";
import HomePage from "./pages/Home.tsx";
import DetailPage from "./pages/Detail.tsx";
import { HelmetProvider } from "react-helmet-async";
import LoginPage from "./components/Login.tsx";
import RegisterPage from "./components/Register.tsx";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={"/"}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="detail/:id" element={<DetailPage />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ClerkProvider>
  </StrictMode>
);
