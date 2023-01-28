import React from "react";

const Button = ({ price }) => {
  return (
    <button className="btn-buy text-sm absolute right-0 bottom-0 rounded-[15px] text-white border-none p-2">
      Купить {price} руб.
    </button>
  );
};

export default Button;
