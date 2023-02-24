import { api } from "../config/api"
import { results } from "../stores/results"
import type { Results } from "../stores/results"
import type { AxiosError } from "axios"

  export async function handleSearch(searchQuery: string, searchType: "movie" | "show" | null, page: string) {
    try {
      const { data } = await api.get(`.netlify/functions/search`, {
        params: {
          query: searchQuery,
          type: searchType,
          page,
        }
      })

      results.update((currentData) => {
        const res: Results = {
          results: [...currentData.results, ...data.results],
          searchType,
          nextPage: data.page + 1,
        }
        return res
      })
    } catch (error: unknown) {
      const err = error as AxiosError
      results.update((currentData) => {
        const res: Results = {
          ...currentData,
          error: err.message,
        }
        return res
      })
    }
  }

