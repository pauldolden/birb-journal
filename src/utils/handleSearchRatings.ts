import { get } from 'svelte/store';
import { api } from '../config/api';
import { app } from '../stores/app';
import { results } from '../stores/results';
import type { Results } from '../stores/results';
import type { AxiosError } from 'axios';

export async function handleSearchRatings() {
  const  $app = get(app);

  const $results = get(results);

  const nextPage = $app.searchQuery === $results.searchQuery && $app.searchType === $results.searchType ? $results.nextPage : 1;
   
	try {
		const { data } = await api.get("/search", {
			params: {
				query: $app.searchQuery,
				type: $app.searchType,
				page: nextPage
      }
		});

		results.update((currentData) => {
			const res: Results = {
				results: [...currentData.results, ...data.results],
        totalPages: data.total_pages,
				searchType: $app.searchType,
        searchQuery: $app.searchQuery,
				nextPage: data.page + 1
			};
			return res;
		});
	} catch (error: unknown) {
		const err = error as AxiosError;
		results.update((currentData) => {
			const res: Results = {
				...currentData,
				error: err.message
			};
			return res;
		});
	}
}
