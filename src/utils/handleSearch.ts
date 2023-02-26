import { api } from "../config/api"
import { results } from "../stores/results"
import type { Results } from "../stores/results"
import type { AxiosError } from "axios"
import type { SearchTypes } from "../enums/SearchTypes"

  export async function handleSearch(searchQuery: string, searchType: SearchTypes, page: string) {
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

