import { get } from 'svelte/store';
import { api } from '../config/api';
import { app } from '../stores/app';
import { results } from '../stores/results';
import type { Results } from '../stores/results';
import type { AxiosError } from 'axios';

export async function getRatings() {
  const  $app = get(app);

	try {
		const { data } = await api.get("/get-ratings", {
			params: {
				type: $app.searchType,
      }
		});

		results.update((currentData) => {
			const res: Results = {
        ...currentData,
				results: [...currentData.results, ...data],
				searchType: $app.searchType,
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
