import axios from 'axios';

const baseUrl = import.meta.env.DEV ? import.meta.env.VITE_SERVICE_URL_DEV : import.meta.env.VITE_SERVICE_URL_PROD;

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
