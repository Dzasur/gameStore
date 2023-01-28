import React from "react";

const Genres = ({ genres }) => {
  return (
    <p className="mt-2 flex gap-2 flex-wrap">
      {genres.map((genre) => (
        <span className="rounded-lg genre">{genre}</span>
      ))}
    </p>
  );
};

export default Genres;
