import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPageDesktop } from "./screens/MainPageDesktop/MainPageDesktop";
import { ImpressumPage } from "./screens/ImpressumPage/ImpressumPage";
import { LeadgenPage } from "./screens/LeadgenPage/LeadgenPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainPageDesktop />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/angebot" element={<LeadgenPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);