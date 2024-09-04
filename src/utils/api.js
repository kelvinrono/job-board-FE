import axios from 'axios';
import { getConfig } from './config';
const { baseURL } = getConfig();

// Create an Axios instance with the baseURL
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default api;
