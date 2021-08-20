import React from "react";
import { directors } from "../data";
import DirectorCard from "./DirectorCard";

function Directors() {

  return <div>
    <h1>Directors Page</h1>
    {directors.map(director=><DirectorCard key={director.name} director={director}/>)}
  </div>;
}

export default Directors;
