import axios from 'axios';

const api = axios.create({
  baseURL: 'https://techeruditestaging.com/projects/plie-api/public/api/',
  timeout: 10000,
});

export default api;