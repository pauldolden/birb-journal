<script lang="ts">
  import type { Movie } from "../../../interfaces/Movies";
  import type { Show } from "../../../interfaces/Shows";
  import { isShow } from "../../../interfaces/Shows";
  import ShowDetails from "../../../components/ShowDetails.svelte";
  import MovieDetails from "../../../components/MovieDetails.svelte";

  interface Data {
    result: Show | Movie;
  }

  export let data: Data


</script>

{#if isShow(data.result)}
  <ShowDetails result={data.result} />
  {:else}
  <MovieDetails result={data.result} />
{/if}

