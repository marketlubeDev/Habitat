import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hab from "./Hab.tsx";
import FullGallery from "./components/FullGallery.tsx";
import Admin from "./components/Admin.tsx";
import "./styles.css";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hab />} />
        <Route path="/gallery" element={<FullGallery />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
