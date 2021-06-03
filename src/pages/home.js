import React, { useState } from "react";
import Row from "../components/Row";
import requests from "../components/requests";
import Banner from "../components/Banner";
import "../css/App.css";

const Home = ({ loggedIn, signOut }) => {


  return (
    <div className="App">
      <Banner />

      {/* <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow

        /> */}

      <div className="home-content">
        
        <Row
          title="Fantasy"
          fetchUrl={requests.fetchFantasyMovies}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Drama" fetchUrl={requests.fetchDrama} />

        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action" fetchUrl={requests.fetchActionMovies} isLargeRow />
        <Row title="Animated" fetchUrl={requests.fetchAnimationMovies} />
        <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      </div>

      {/*
        <Row title="Horror " fetchUrl={requests.fetchHorrorMovies} isLargeRow />
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Crime " fetchUrl={requests.fetchCrimeMovies} />
        <Row
          title="Thriller"
          fetchUrl={requests.fetchThrillerMovies}
          isLargeRow
        />
        <Row title="History" fetchUrl={requests.fetchHistoryMovies} />
        <Row title="Mystery" fetchUrl={requests.fetchMysteryMovies} />
       
        <Row title="Adventure" fetchUrl={requests.fetchAdventureMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />  */}
    </div>
  );
};

export default Home;
