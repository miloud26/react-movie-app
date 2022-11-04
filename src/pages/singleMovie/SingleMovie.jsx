import React from "react";
import { useParams } from "react-router-dom";
import "./singleMovie.scss";
import apiConfig from "../../api/cofig";
const SingleMovie = () => {
  const { id } = useParams();
  const [singleMovie, setSingleMovie] = React.useState([]);
  const getSingleMovie = async () => {
    try {
      const response = await fetch(`${apiConfig.single_movie(id)}`);
      const data = await response.json();
      console.log(data);
      setSingleMovie(data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getSingleMovie();
  }, [id]);

  return (
    <>
      <section className="single-movie">
        <div className="single-movie__img">
          <img
            src={apiConfig.originalImage(singleMovie.poster_path)}
            alt={`${singleMovie.title}`}
          />
        </div>
        <div className="single-movie__content">
          <div className="single-movie__content__title">
            {singleMovie.title}
          </div>
          <div className="single-movie__content__overview">
            {singleMovie.overview}
          </div>
        </div>
      </section>
      <section className="backbpak">
        {
          <img
            src={apiConfig.originalImage(singleMovie.backdrop_path)}
            alt={`${singleMovie.title}`}
          />
        }
      </section>
    </>
  );
};

export default SingleMovie;
