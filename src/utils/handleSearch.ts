import { api } from '../config/api';
import { app } from '../stores/app';
import { results } from '../stores/results';
import type { Results } from '../stores/results';
import type { AxiosError } from 'axios';
import type { SearchTypes } from '../enums/SearchTypes';

export async function handleSearch(searchQuery: string, searchType: SearchTypes, page: string) {
  // if app search type and query is different from results, reset results
	try {
		const { data } = await api.get("/search", {
			params: {
				query: searchQuery,
				type: searchType,
				page
      }
		});

		results.update((currentData) => {
			const res: Results = {
				results: [...currentData.results, ...data.results],
        totalPages: data.total_pages,
				searchType,
        searchQuery,
				nextPage: data.page + 1
			};
			return res;
		});

    app.update((currentData) => {
      // update next page
      const appState = {
        ...currentData,
        nextPage: data.page + 1
      };

      return appState;
    })
    
    const fetchNextPage = async () => {
      const _page = data.page + 1;
      await handleSearch(searchQuery, searchType, _page);
    }

    return fetchNextPage;

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
