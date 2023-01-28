import React, { useEffect, useState } from "react";
import GameItem from "./GameItem";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/games")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="flex flex-wrap lg:gap-x-12 md:gap-x-8 gap-x-5 md:gap-y-7 gap-y-5 justify-center mb-20">
      {data.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
};

export default HomePage;
