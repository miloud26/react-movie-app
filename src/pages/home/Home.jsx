import React from "react";
import Hero from "../../components/hero/Hero";
import MovieList from "../../components/movieList/MovieList";

import "./home.scss";

const Home = () => {
  return (
    <div>
      <Hero />
      <MovieList />
    </div>
  );
};

export default Home;
