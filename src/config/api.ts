import axios from 'axios';

const baseUrl = import.meta.env.DEV ? 'http://localhost:9999/.netlify/functions' : `https://birbjournal.netlify.app/netlify/functions`;

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
