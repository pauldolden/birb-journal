<script lang="ts">
	import { onMount } from 'svelte';
	import { app } from '../stores/app';
	import { results } from '../stores/results';
	import { handleSearch } from '../utils/handleSearch';
  import { handleSearchRatings } from '../utils/handleSearchRatings';
  import { handleSearchWatchlist } from '../utils/handleSearchWatchlist';

	import { page } from "$app/stores";

  let searchFunc: () => void;

  onMount(() => {
    switch($page.url.pathname) {
      case '/ratings':
        searchFunc = handleSearchRatings;
        break;
      case '/watchlist':
        searchFunc = handleSearchWatchlist;
        break;
      default:
        searchFunc = handleSearch;
        break;
    }
  });

	app.subscribe((value) => {
    if(value.searchQuery == $results.searchQuery || value.searchType !== $results.searchType) {
      results.update((results) => {
        results.nextPage = "1";
        results.results = [];
        results.totalPages = null;

        return results;
      });
    }
	});
</script>

<div class="form-control self-center m-2 px-2 min-w-full">
	<div class="input-group">
		<input
			bind:value={$app.searchQuery}
			type="text"
			placeholder="Search…"
			class="input input-bordered flex-1"
		/>
		<button
			class="btn btn-square bg-primary focus:bg-primary-focus"
			on:click={searchFunc}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/></svg
			>
		</button>
	</div>
</div>
