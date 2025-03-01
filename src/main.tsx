import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TravelGuide from "./components/Travel/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TravelGuide />
  </StrictMode>
);
