import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjJiNGNkNmNiNDhmNTY3Yjc2ZTdlN2JmZTY4M2U4ZSIsInN1YiI6IjY1MDViYWJmNDJkOGE1MDExYmQ2MWY2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s82WzK6bT1muysDzxZRZIWFGde0nfQaRQ9ACaXwwjrE';

export const fetchMovies = async (params, req) => {
  const options = {
    params,
  };
  const resp = await axios.get(req, options);
  return resp;
};
