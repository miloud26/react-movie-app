import React from "react";
import apiConfig from "../../api/cofig";
import "./movie.scss";
const Movie = ({ id, backdrop_path, poster_path, title, overview }) => {
  return (
    <section className="movie">
      <div className="movie__img">
        <img
          src={
            apiConfig.originalImage(poster_path) ||
            apiConfig.originalImage(backdrop_path)
          }
          alt="title"
        />
      </div>
      <div className="movie__content">
        <div className="movie__content__title">{title || "movies"}</div>
      </div>
    </section>
  );
};

export default Movie;
