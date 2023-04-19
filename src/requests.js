// Typically would be stored in a .env file via {process.env.REACT_APP_API.KEY}

const API_KEY = process.env.REACT_APP_API.KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-GB`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchTrendingAllDay: `/trending/all/day?api_key=${API_KEY}&language=en-GB`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-GB&page=1`,
};
export default requests;
