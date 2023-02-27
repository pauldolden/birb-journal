<script lang="ts">
  import type { Show } from "../interfaces/Shows";
  import { isShow } from "../interfaces/Shows";
  import type { Movie } from "../interfaces/Movies";
	import ShowCard from "./ShowCard.svelte";
	import MovieCard from "./MovieCard.svelte";
  export let result: Show | Movie;
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  
  const poster = result.poster_path
    ? `${IMAGE_PATH}${result.poster_path}`
    : null;


</script>

{#if isShow(result)}
  <ShowCard {result} {poster} />
  {:else}
  <MovieCard {result} {poster} />
{/if}
