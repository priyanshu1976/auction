import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auction from "./components/Auction.jsx";
import Admin from "./components/Admin.jsx";
import Home from "./components/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auction/:teamName" element={<Auction />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
