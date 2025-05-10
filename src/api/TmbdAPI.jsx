import axios from 'axios';

const API_KEY = 'fbe3e6e0efe2a935006e0242bb340a7a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = () =>
  axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

export const getMovieDetails = (movieId) =>
  axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
