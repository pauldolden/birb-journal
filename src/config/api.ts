import axios from 'axios';

const baseUrl = process.env.NODE_ENV !== 'production' ? process.env.VITE_SERVICE_URL_DEV : process.env.VITE_SERVICE_URL_PROD;

export const api = axios.create({
  baseURL: baseUrl + '/.netlify/functions/',
  headers: {
    'Content-Type': 'application/json',
  },
});
