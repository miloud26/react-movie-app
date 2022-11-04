import React from "react";
import "./movies.scss";
import { useGlobalContext } from "../../context";
import Movie from "../../components/movie/Movie";
import { Link } from "react-router-dom";
import { useRef } from "react";
import apiConfig from "../../api/cofig";
import { useEffect } from "react";
const Movies = () => {
  const value = useRef(null);
  const { loading, movies, setTermSearch } = useGlobalContext();
  const HandleSubmit = (e) => {
    e.preventDefault();
    setTermSearch(value.current.value);
  };
  console.log(movies);
  if (loading) {
    return (
      <>
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </>
    );
  }
  if (movies.length === 0) {
    return (
      <>
        <div className="loading">
          <h1>Ooops ! Movies Not Found .</h1>
        </div>
      </>
    );
  }
  return (
    <section className="movies">
      <div className="movies__search">
        <form className="movies__search__form" onSubmit={HandleSubmit}>
          <input type="text" placeholder="search movie" ref={value} />
          <button type="submit" onSubmit={HandleSubmit}>
            Go
          </button>
        </form>
      </div>
      <div className="display-movies">
        {movies.map((movie) => {
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

export default Movies;
