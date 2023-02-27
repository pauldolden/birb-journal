import { writable } from 'svelte/store';
import { SearchTypes } from '../enums/SearchTypes';

export interface AppState {
  searchQuery: string;
  searchType: SearchTypes;
  nextPage?: string;
}

export const app = writable<AppState>({
  searchQuery: '',
  searchType: SearchTypes.TV,
  nextPage: '1',
})
