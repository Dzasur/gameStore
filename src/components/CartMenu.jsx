import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const CartMenu = ({ items }) => {
  return (
    <div className="cart-menu absolute top-9 right-0 rounded-2xl">
      <div className="py-2 text-base opacity-90 font-normal flex flex-col gap-4">
        {items.length > 0
          ? items.map((game) => <CartItem key={game.title} game={game} />)
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div>
          <hr className="my-3 opacity-60" />
          <div className="flex justify-between my-3 text-base font-normal">
            <span>Итого: </span>
            <span>{items.reduce((acc, el) => (acc += el.price), 0)} руб.</span>
          </div>
          <Link to="/order">
            <button className="btn-buy text-sm rounded-[15px] font-normal text-white border-none p-2 mb-3">
              Оформить заказ
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
