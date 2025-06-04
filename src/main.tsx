import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Habitat from "./Habitat.tsx";
import Hab from "./Hab.tsx";
import FullGallery from "./components/FullGallery.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hab />} />
        <Route path="/gallery" element={<FullGallery />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
