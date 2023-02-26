<script lang="ts">
  import type { Show } from "../interfaces/Shows";
  import type { Movie } from "../interfaces/Movies";
	import ShowCard from "./ShowCard.svelte";
	import MovieCard from "./MovieCard.svelte";
  export let result: Show | Movie;
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  
  const poster = result.poster_path
    ? `${IMAGE_PATH}${result.poster_path}`
    : "/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg";


  const isShow = (result: Show | Movie): result is Show => {
    return (result as Show).first_air_date == undefined;
  };
</script>

{#if isShow(result)}
  <ShowCard {result} {poster} />
  {:else}
  <MovieCard {result} {poster} />
{/if}
