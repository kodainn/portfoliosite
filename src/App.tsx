import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App
