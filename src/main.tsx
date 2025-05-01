import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Habitat from "./Habitat.tsx";
import Hab from "./Hab.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Hab />
  </StrictMode>
);
