import React from "react";
import GameCover from "../GamePage/GameCover";

const OrderItem = ({ game }) => {
  return (
    <div className="flex">
      <GameCover image={game.image} />
      <div className="flex justify-between w-full">
        <h3 className="ml-5 text-2xl font-medium">{game.title}</h3>
        <div>
          <div><span className="text-2xl font-medium">{game.price} руб.</span></div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
