<script lang="ts">
  import type { Movie } from "../interfaces/Movies";
  export let result: Movie;  
  export let poster: string | null;
</script>

{#if poster}
  <img src={poster} alt={result.title} />
{:else}
  <div class="w-500px bg-grey-300">
    <h2>{result.title}</h2>
    <p>{result.overview}</p>
  </div>
{/if}

