import React from "react";
import { Link } from "react-router-dom";
import CartBlock from "./CartBlock";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-20 mb-8 text-[26px] font-bold">
      <Link to="/">
        <h1>Game Store</h1>
      </Link>
      <div className="flex items-center gap-3">
        <CartBlock />
      </div>
    </header>
  );
};

export default Header;
