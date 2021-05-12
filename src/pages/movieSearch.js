import React, { useEffect, useState } from "react";
import axios from "../components/axios";
import "../css/movieSearch.css";
import { Link } from "react-router-dom";

const MovieSearch = () => {
  const SearchedWord = decodeURI(window.location.pathname.split("/")[2]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [searchedMovies, setSearchedMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/search/movie?query=${SearchedWord}&api_key=b65ed2463d3913e0cc1fbd24d023dad1`
      );

      setSearchedMovies(request.data.results);
      setLoading(true);
      return request;
    }

    fetchData();
  }, []);


  return (
    <div className="movie-search-container">
      {(searchedMovies.length === 0) ? <h1 className="result-title">No results for {SearchedWord}</h1> : <h1 className="result-title">Displaying results for {SearchedWord}</h1>}
      <div
          className={`loading-Screen-home ${
            loading ? "display-none" : "display-block"
          }`}
        >
          <div className="loading-letters">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          </div>
          
        </div>


      <div className="search-grid">
        {searchedMovies.map((movie, key) => (
          <Link
            to={`/moviedetails/` + movie.id}
            className="search_movie_linksLarge"
          >
            <img
              key={key}
              className="search_row__posterLarge"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.title}
              height="300px" width="100px"
            ></img>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
