import React from "react";
import Button from "./Button";
import Genres from "./Genres";
import Image from "./Image";
import Title from "./Title";

const GameItem = ({
  game: { title, genres, image, price, id, description },
}) => {
  return (
    <div className="w-[320px] rounded-2xl cart-bg relative">
      <div className="cart-p">
        <Image image={image} id={id} />
        <Title id={id} title={title} />
        <Genres genres={genres} />
        <p className="md:text-lg text-base my-2">{description}</p>
        <Button price={price} />
      </div>
    </div>
  );
};

export default GameItem;
