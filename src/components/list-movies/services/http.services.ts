import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const OMDB_API_URL = 'http://www.omdbapi.com/';
const API_KEY = 'b524b60b';

const http = axios.create({
  baseURL: OMDB_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    apikey: API_KEY,
  },
});

http.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export default http;