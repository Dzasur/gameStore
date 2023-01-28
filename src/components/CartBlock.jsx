import React from "react";
import { BiCartAlt } from "react-icons/bi";

const CartBlock = () => {
  return (
    <>
      <BiCartAlt size={30} className="cursor-pointer" />
      <span className="text-[16px]">0 руб.</span>
    </>
  );
};

export default CartBlock;
