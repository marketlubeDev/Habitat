import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Kunjiraman from "./Kunjiraman";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Kunjiraman />
  </StrictMode>
);
