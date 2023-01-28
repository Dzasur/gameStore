import React from "react";
import Button from "./Button";
import Genres from "./Genres";
import Image from "./Image";
import Title from "./Title";

const GameItem = ({
  game: { title, genres, image, price, id, description }, game
}) => {
  return (
    <div className="w-[320px] rounded-2xl cart-bg relative">
      <div className="cart-p">
        <Image image={image} id={id} />
        <Title id={id} title={title} />
        <Genres genres={genres} id={id} />
        <p className="md:text-lg text-base my-2 opacity-70">{description}</p>
        <Button game={game} />
      </div>
    </div>
  );
};

export default GameItem;
