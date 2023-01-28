import React from "react";

const Genres = ({ genres, id }) => {
  return (
    <p className="mt-2 flex gap-2 flex-wrap">
      {genres.map((genre) => (
        <span key={`${id} ${genre}`} className="rounded-lg genre">{genre}</span>
      ))}
    </p>
  );
};

export default Genres;
