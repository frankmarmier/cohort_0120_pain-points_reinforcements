import React, { useState, useEffect } from "react";
import apiHandler from "../api/apiHandler";
import Movie from "../components/Movie";

// const api = apiHandler();
const api = new apiHandler();

const Movies = props => {
  const [movies, setMovies] = useState([]);
  console.log(props);
  useEffect(() => {
    api
      .get("/movies")
      .then(res => {
        setMovies(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const changePage = e => {
    props.history.push("/toto");
  };

  return (
    <div>
      <h1>ALL MOVIES</h1>

      <button onClick={changePage}>Change page</button>
      {movies.map((el, index) => (
        <Movie movie={el} key={index} changeTheMovies={setMovies} />
      ))}
    </div>
  );
};

export default Movies;
