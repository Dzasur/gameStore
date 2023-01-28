import React from "react";
import { Link } from "react-router-dom";

const Title = ({ id, title }) => {
  return (
    <Link to={`/${id}`}>
      <h3 className="text-[18px] font-bold cursor-pointer my-3">{title}</h3>
    </Link>
  );
};

export default Title;
