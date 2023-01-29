import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header"
import GamePage from "./pages/GamePage/GamePage";
import OrderPage from "./pages/OrderPage/OrderPage";

function App() {
  
  return (
    <BrowserRouter>
      <div className="max-w-[1180px] mx-auto px-3 text-white">
        <Header/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:title" element={<GamePage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
