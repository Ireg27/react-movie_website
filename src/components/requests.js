const APIKEY = "b65ed2463d3913e0cc1fbd24d023dad1";

const animation_genre = 16; //
const crime_genre = 80;//
const documentary_genre = 99;//
const action_genre = 28;//
const adventure_genre = 12;//
const comedy_genre = 35;//
const horror_genre = 27;//
const fantasy_genre = 14;//
const history_genre = 36;//
const mystery_genre = 9648;
const romance_genre = 10749;
const thriller_genre = 53;
const family_genre = 10751;//

const drama_genre =18;//

// family, Science Fiction
const requests = {
  fetchTrending: `/trending/movie/week?api_key=${APIKEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=${action_genre}`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=${comedy_genre}`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=${horror_genre}`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=${romance_genre}`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=${documentary_genre}`,
  fetchAdventureMovies: `/discover/movie?api_key=${APIKEY}&with_genres=${adventure_genre}`,
  fetchFantasyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=${fantasy_genre}`,
  fetchHistoryMovies: `/discover/movie?api_key=${APIKEY}&with_genres=${history_genre}`,
  fetchMysteryMovies: `/discover/movie?api_key=${APIKEY}&with_genres=${mystery_genre}`,
  fetchThrillerMovies: `/discover/movie?api_key=${APIKEY}&with_genres=${thriller_genre}`,
  fetchAnimationMovies: `/discover/movie?api_key=${APIKEY}&with_genres=${animation_genre}`,
  fetchCrimeMovies: `/discover/movie?api_key=${APIKEY}&with_genres=${crime_genre}`,
  fetchDrama: `/discover/movie?api_key=${APIKEY}&with_genres=${drama_genre}`,
  fetchFamily: `/discover/movie?api_key=${APIKEY}&with_genres=${family_genre}`,
};


export default requests;
