import React from "react";
import { Link } from "react-router-dom";

const Image = ({ image, id }) => {
  return (
    <Link to={`/${id}`}>
      <img
        className="h-[170px] w-full object-contain rounded-xl"
        src={image}
        alt="img"
      />
    </Link>
  );
};

export default Image;
