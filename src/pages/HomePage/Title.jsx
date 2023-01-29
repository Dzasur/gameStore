import React from "react";

import { Link } from "react-router-dom";

const Title = ({ title, game }) => {
  return (
    <Link  to={`/${title}`}>
      <h3 onClick={() => localStorage.setItem('game', JSON.stringify(game))} className="text-[18px] font-bold cursor-pointer my-3">{title}</h3>
    </Link>
  );
};

export default Title;
