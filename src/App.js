import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-[1180px] mx-auto px-3 text-white">
        <Header/>
        <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
