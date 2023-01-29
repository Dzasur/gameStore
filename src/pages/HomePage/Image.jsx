import React from "react";
import { Link } from "react-router-dom";


const Image = ({ image, title, game }) => {
  return (
    <Link to={`/${title}`}>
      <img
        onClick={() => localStorage.setItem('game', JSON.stringify(game))}
        className="h-[170px] w-full object-contain rounded-xl"
        src={image}
        alt="img"
      />
    </Link>
  );
};

export default Image;
