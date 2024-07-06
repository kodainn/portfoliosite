import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfoliaPage from "./pages/PortfoliaPage";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolia" element={<PortfoliaPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App
