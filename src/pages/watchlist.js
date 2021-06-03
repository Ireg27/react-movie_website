import React from "react";
import "../css/userWatch.css";
import $ from "jquery";
import WatchList from "../components/Watchlist";
import requests from "../components/requests";



const userSettings = () => {
    

    $(document).off().ready(function() {
        let watchlistBtn1 = document.getElementById("watchlist_1");
        let watchlistBtn2 = document.getElementById("watchlist_2");
        let watchlistC = document.getElementById("watchlistC");
        let watchedC = document.getElementById("watchedC");
      
        watchlistBtn1.addEventListener('click', () => {
            watchlistBtn1.classList.add('watchlist_active');
            watchlistBtn2.classList.remove('watchlist_active');
            watchlistC.classList.remove('hidden_display');
            watchedC.classList.add('hidden_display');
        })

        watchlistBtn2.addEventListener('click', () => {
            watchlistBtn2.classList.add('watchlist_active');
            watchlistBtn1.classList.remove('watchlist_active');
            watchlistC.classList.add('hidden_display');
            watchedC.classList.remove('hidden_display');

        })

    });


  return (
    <div className="uSettings">
      <div className="watchlist_titles">
        <button className="watchlist_select watchlist_active" id="watchlist_1">WatchList</button>
        <button className="watchlist_select" id="watchlist_2">Watched</button>
      </div>
      <div className="watchlist_content">
          <div className="watchlist_container" id="watchlistC">
          <WatchList fetchUrl={requests.fetchTrending} isLargeRow/>
          </div>
          <div className="watched_container hidden_display" id="watchedC">
          <WatchList fetchUrl={requests.fetchAnimationMovies} isLargeRow/>
          </div>
      </div>
    </div>
  );
};

export default userSettings;
