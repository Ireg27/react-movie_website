import React, { useState, useEffect, lazy } from "react";
import axios from "./axios";
import "../css/Row.css";
import { Link } from "react-router-dom";
import $ from 'jquery'
import { useHistory } from 'react-router'
// rfce

const base_url = "https://image.tmdb.org/t/p/w185/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [mouseAction, setMouseAction] = useState('mousedown');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      setLoading(true);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  
  const sliders = document.querySelectorAll(".row__posters");
  let isDown = false;
  let startX;
  let scrollLeft;

  if (sliders) {
    sliders.forEach((slider) => {
      slider.addEventListener("mousedown", (e) => {
        e.preventDefault();
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        setMouseAction('mousedown');
      });

      slider.addEventListener("mouseleave", () => {
       
        isDown = false;
      });

      slider.addEventListener("mouseup", () => {
       
        isDown = false;
      });

      slider.addEventListener("mousemove", (e) => {
        e.preventDefault();
        if (!isDown) return;
        let x = e.pageX - slider.offsetLeft;
        let walk = x - startX;
        slider.scrollLeft = (scrollLeft - walk);
        setMouseAction('click');
      });
    });
  }

  const movie_links = document.querySelectorAll(".movie_links");
 

    movie_links.forEach(movie_link => {
      $(movie_link).off().on(mouseAction, (e) => {
        e.preventDefault();
      })
    })


  return (
    <div className="row">
      <h2>{title}</h2>

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

      <div className="row__posters">
        {movies.map((movie, key) => (
          <Link to={`/moviedetails/` + movie.id} className={`movie_links ${isLargeRow && "movie_linksLarge"}`}>
            <img
              key={key}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
            ></img>
            {console.log(movie)}
           </Link>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Row);
