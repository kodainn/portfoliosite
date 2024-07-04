import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App
