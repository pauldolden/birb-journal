import { writable } from 'svelte/store';
import { SearchTypes } from '../enums/SearchTypes';
import type { Movie } from '../interfaces/Movies';
import type { Show } from '../interfaces/Shows';

export interface Results {
  nextPage: string;
  results: Movie[] | Show[] | [];
  searchType: SearchTypes;
  error?: string;
}

export const results = writable<Results>({
  nextPage: "1",
  results: [],
  searchType: SearchTypes.TV,
});
