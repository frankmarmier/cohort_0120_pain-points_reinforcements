import React from "react";

const Movie = ({ movie, changeTheMovies }) => {
  const handleMovie = () => {
    changeTheMovies([{ title: "TOTO STRIKEBACK" }]);
  };

  return (
    <>
      <button onClick={handleMovie}>Change movie title</button>
      <div>{movie.title}</div>
    </>
  );
};

export default Movie;
