<script lang="ts">
  import { api } from "../config/api"
  let searchQuery = ""
  let searchType = "movie"

  async function handleSearch() {
    try {
      const response = await api.get(`.netlify/functions/search`, {
        params: {
          query: searchQuery,
          type: searchType
        }
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
</script>

<div class="form-control">
  <div class="input-group">
    <input bind:value={searchQuery} type="text" placeholder="Search…" class="input input-bordered" />
    <button class="btn btn-square bg-primary focus:bg-primary-focus" on:click={handleSearch}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
