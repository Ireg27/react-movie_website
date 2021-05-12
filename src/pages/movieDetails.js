import React, { useState, useEffect, lazy, Suspense } from "react";
import "../css/movieDetails.css";
import axios from "../components/axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import requests from "../components/requests";
import YTSearch from "youtube-api-search";
import imageCompression from "browser-image-compression";

const Row = lazy(() => import("../components/Row"));

const MovieDetails = () => {
  const base_url = "https://image.tmdb.org/t/p/w342";
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const chosenMovieId = window.location.pathname.split("/")[2];

  const API_KEY_YT = "AIzaSyCV1I8gcpyt7o9pECLJdO9Xe0FX2ZgSVu0";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/movie/${chosenMovieId}?api_key=b65ed2463d3913e0cc1fbd24d023dad1`
      );
      setMovie(request.data);

      setLoading(true);
      return request;
    }
    fetchData();
  }, []);

  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  // console.log("HELLO WORLD");
  const opts = {
    height: "590",
    width: "100%",
    playerVars: {
      autuplay: 1,
    },
  };

  // movie?.original_title || movie?.title || "Sentinelle"

  const handleTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_title || "")
        .then((url) => {
          // const urlParams = new URLSearchParams('v=2JAElThbKrI');
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          YTSearch(
            { key: API_KEY_YT, term: `${movie?.original_title} trailer` },
            (videos) => {
              console.log(videos?.[0].id.videoId);
              setTrailerUrl(videos?.[0].id.videoId);
            }
          );
          console.log(error);
        });
    }
  };

  // const videoSearch = () => {
  //   YTSearch({key: API_KEY_YT, term: 'Naruto Shippuden the movie trailer'}, //(videos) => {
  //     console.log(videos);
  //   })
  // }

  // console.log(movie);

  function renderSwitch(genre_name) {
    switch (genre_name) {
      case "Action":
        return (
          <Row
            title={genre_name}
            fetchUrl={requests.fetchActionMovies}
            isLargeRow
          />
        );
      case "Animation":
        return (
          <Row
            title={genre_name}
            fetchUrl={requests.fetchAnimationMovies}
            isLargeRow
          />
        );
      case "Fantasy":
        return (
          <Row
            title={genre_name}
            fetchUrl={requests.fetchFantasyMovies}
            isLargeRow
          />
        );
      case "Adventure":
        return (
          <Row
            title={genre_name}
            fetchUrl={requests.fetchAdventureMovies}
            isLargeRow
          />
        );
      case "Drama":
        return (
          <Row title={genre_name} fetchUrl={requests.fetchDrama} isLargeRow />
        );
      case "Family":
        return (
          <Row title={genre_name} fetchUrl={requests.fetchFamily} isLargeRow />
        );
      case "Comedy":
        return (
          <Row
            title={genre_name}
            fetchUrl={requests.fetchComedyMovies}
            isLargeRow
          />
        );
      case "Crime":
        return (
          <Row
            title={genre_name}
            fetchUrl={requests.fetchCrimeMovies}
            isLargeRow
          />
        );
      case "Documentary":
        return (
          <Row
            title={genre_name}
            fetchUrl={requests.fetchDocumentaries}
            isLargeRow
          />
        );
      case "Horror":
        return (
          <Row
            title={genre_name}
            fetchUrl={requests.fetchHorrorMovies}
            isLargeRow
          />
        );
      case "History":
        return (
          <Row
            title={genre_name}
            fetchUrl={requests.fetchHistoryMovies}
            isLargeRow
          />
        );
      case "Thriller":
        return (
          <Row
            title={genre_name}
            fetchUrl={requests.fetchThrillerMovies}
            isLargeRow
          />
        );
      case "Romance":
        return (
          <Row
            title={genre_name}
            fetchUrl={requests.fetchRomanceMovies}
            isLargeRow
          />
        );
      case "Mystery":
        return (
          <Row
            title={genre_name}
            fetchUrl={requests.fetchMysteryMovies}
            isLargeRow
          />
        );
      default:
        return (
          <Row
            title={"Trending"}
            fetchUrl={requests.fetchTrending}
            isLargeRow
          />
        );
    }
  }
  //  </div>

  return (
    <div className="movieDetails-container">

      <div className="movie-details">
        <img
          src={`${base_url}${movie.poster_path}`}
          alt={movie.title}
          rel="preload"
          as="image"
        />
        <Suspense fallback={<div />}>
        <div className="movie-content">
          <h1>{movie.title}</h1>
          <div className="movie-subtitle">
            <h4 className="movie-sub">Release Year: {movie.release_date}</h4>
            <h4 className="movie-sub bullet"> • </h4>
            <h4 className="movie-sub">Duration: {movie.runtime} minutes</h4>
            <h4 className="movie-sub bullet"> • </h4>
            <h4 className="movie-sub">Rating: {movie.vote_average}</h4>
          </div>

          <p className="movie-paragraph"> {movie.overview} </p>

          <div className="movie-three">
            <h4>
              <span className="movie-dd">Budget:</span>
              {movie.budget === 0 ? " " : "$"}
              {movie.budget === 0 ? "Unknown" : numberWithCommas(movie?.budget)}
            </h4>

            <div className="inline-genres">
              <h4>
                <span className="movie-dd">Genres: </span>{" "}
              </h4>

              {typeof movie?.genres?.[0] === "undefined" ? (
                <h4 className="movie-genres" style={{ paddingRight: "20px" }}>
                  Unknown
                </h4>
              ) : (
                movie.genres?.map((genre, genre_key) => (
                  <h4
                    className="movie-genres"
                    style={{ paddingRight: "20px" }}
                    key={genre_key}
                  >
                    {genre?.name}
                  </h4>
                  // last child no bullet point with css
                ))
              )}
            </div>
            <h4>
              <span className="movie-dd">Studio: </span>{" "}
              {typeof movie?.production_companies?.[0] !== "undefined"
                ? movie?.production_companies?.[0].name
                : `Unknown`}
            </h4>
          </div>

          <div className="movie-btns">
            <button
              className="banner__button movie-btn"
              onClick={() => handleTrailer(movie)}
            >
              {trailerUrl ? "Close Trailer" : "Play Trailer"}
            </button>

            <button className="banner__button movie-btn">
              Add to watch List
            </button>
          </div>
        </div>
        </Suspense>
      </div>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

      <Suspense fallback={<div />}>
        <div className="rec-container">
          {typeof movie?.genres?.[0] !== "undefined"
            ? renderSwitch(movie?.genres?.[0].name)
            : renderSwitch("Trending")}
        </div>
      </Suspense>
    </div>
  );
};

// kamuporcife

// eficropumak

export default MovieDetails;
