<script lang="ts">
	import { app } from '../stores/app';
	import type { SearchTypes } from '../enums/SearchTypes';
	import { results } from '../stores/results';
	import { handleSearch } from '../utils/handleSearch';

	let searchType: SearchTypes = $app.searchType;
	let searchQuery = '';

	app.subscribe((value) => {
		searchType = value.searchType;
	});

  function search() {
    // if search query or search type has changes reset params otherwise keep them and fetch next page
    if (searchQuery !== $app.searchQuery || searchType !== $app.searchType) {
      results.update((results) => {
        results.nextPage = "1";
        results.results = [];
        return results;
      });
    }

    handleSearch(searchQuery, searchType, $results.nextPage);
  }
</script>

<div class="form-control self-center mb-3 px-1 min-w-full">
	<div class="input-group">
		<input
			bind:value={searchQuery}
			type="text"
			placeholder="Search…"
			class="input input-bordered flex-1"
		/>
		<button
			class="btn btn-square bg-primary focus:bg-primary-focus"
			on:click={search}
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
