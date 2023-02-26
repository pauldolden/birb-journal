<script lang="ts">
	import { SearchTypes } from "../enums/SearchTypes";
  import type { Results } from "../stores/results";
  import { results } from "../stores/results";
	import MovieCard from "./MovieCard.svelte";
	import ShowCard from "./ShowCard.svelte";

  let res: Results

  results.subscribe((value) => {
    res = value;
  });

</script>

{#each res.results as result}
  {#if res.searchType === SearchTypes.MOVIE}
    <MovieCard {result} />
    {:else if res.searchType === SearchTypes.TV}
    <ShowCard {result} />
    {/if}
{/each}

