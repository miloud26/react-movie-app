import React from "react";
import { useGlobalContext } from "../../context";
import Movie from "../movie/Movie";
import { Link } from "react-router-dom";
import "./movieList.scss";
const MovieList = () => {
  const { moviesList, loading } = useGlobalContext();
  console.log(loading);

  if (loading) {
    return (
      <>
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </>
    );
  }
  if (moviesList.length === 0) {
    return (
      <>
        <div className="loading">
          <h1>No Movie Right Now !!</h1>
        </div>
      </>
    );
  }
  return (
    <section className="movies-list">
      <div className="title-section">
        <h2>Best Movies In The World</h2>
      </div>
      <div className="display-movies">
        {moviesList.map((movie) => {
          const { id, backdrop_path, poster_path, title, overview } = movie;
          return (
            <Link to={`/movies/${id}`}>
              <Movie
                key={id}
                id={id}
                backdrop_path={backdrop_path}
                poster_path={poster_path}
                title={title}
                overview={overview}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default MovieList;
