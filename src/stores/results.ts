import { writable } from 'svelte/store';
import { SearchTypes } from '../enums/SearchTypes';
import type { Movie } from '../interfaces/Movies';
import type { Show } from '../interfaces/Shows';

export interface Results {
  nextPage: string;
  totalPages: number | null;
  results: Movie[] | Show[];
  searchType: SearchTypes;
  searchQuery: string;
  error?: string;
}

export const results = writable<Results>({
  nextPage: "1",
  totalPages: null,
  results: [],
  searchType: SearchTypes.TV,
  searchQuery: "",
});
