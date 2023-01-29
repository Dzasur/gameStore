import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";

const Button = ({ game }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItem = items.some((el) => el.id === game.id);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItem) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };
  return (
    <button
      onClick={handleClick}
      className="btn-buy text-sm absolute right-2 -bottom-5 rounded-[15px] text-white border-none p-2"
    >
      {isItem ? "Удалить из корзины" : `Купить ${game.price} руб.`}
    </button>
  );
};

export default Button;
