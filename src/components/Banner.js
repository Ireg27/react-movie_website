import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "../css/banner.css";
import { Link } from "react-router-dom";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log( Math.floor(Math.random() * request?.data.results.length))
      return request;
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  // console.log(movie)

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0, 0.5) 0%, rgba(0,0,0, 0.5) 100%), url(http://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <Link to={`/moviedetails/` + movie?.id}>
          <button className="banner__button">Play</button>
          </Link>
          <button className="banner__button">Add to watch List</button>

          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
