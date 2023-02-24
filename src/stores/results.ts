import { writable } from 'svelte/store';
import type { Movie } from '../interfaces/Movies';
import type { Show } from '../interfaces/Shows';

export interface Results {
  nextPage: string;
  results: Movie[] | Show[] | [];
  searchType: 'movie' | 'show' | null;
  error?: string;
}

export const results = writable<Results>({
  nextPage: "1",
  results: [],
  searchType: null,
});