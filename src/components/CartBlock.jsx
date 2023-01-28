import React, {useState} from "react";
import { BiCartAlt } from "react-icons/bi";
import CartMenu from "./CartMenu";
import { useSelector } from "react-redux";
import ItemsInCart from "./ItemsInCart"

const CartBlock = () => {
  const [cartVisible, setCartVisible] = useState(false)
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalReduce = items.reduce((acc, game) => (acc += game.price), 0);
  return (
    <>
      <BiCartAlt size={30} className="cursor-pointer relative" onClick={() => setCartVisible(!cartVisible)} />
    <ItemsInCart quantity={items.length} />
      {totalReduce > 0 ? (
        <span className="text-[16px]">{totalReduce} руб.</span>
      ) : null}
      {cartVisible && <CartMenu items={items} />}
    </>
  );
};

export default CartBlock;
