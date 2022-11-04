import React from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import apiConfig from "./api/cofig";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [movies, setMovies] = useState([]);
  const [termSearch, setTermSearch] = useState("a");
  const [loading, setLoading] = useState(false);

  const fetchMovieList = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${apiConfig.trending_api}`);
      const data = await response.json();
      setMoviesList(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieList();
  }, []);
  const fetchMovie = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${apiConfig.search_api}${termSearch}`);
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [termSearch]);

  return (
    <AppContext.Provider
      value={{
        loading,
        moviesList,
        movies,
        termSearch,
        setTermSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
