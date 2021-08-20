import React from "react";
import { movies } from "../data";
import MovieCard from "./MovieCard";

function Movies() {

  return <div>
    <h1>Movies Page</h1>
    {movies.map(movie=><MovieCard key={movie.title} movie={movie}/>)}
  </div>;
}

export default Movies;
