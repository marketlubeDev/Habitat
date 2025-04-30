import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Habitat from "./Habitat.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Habitat />
  </StrictMode>
);
