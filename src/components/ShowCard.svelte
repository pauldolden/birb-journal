<script lang="ts">
  import type { Show } from "../interfaces/Shows";

  export let result: Show | any;
  export let poster: string | null
</script>

{#if poster}
  <img src={poster} alt={result.name} />
{:else}
  <div class="w-500px bg-grey-300">
    <h2>{result?.name ?? result?.title}</h2>
    <p>{result?.overview ?? result?.description}</p>
  </div>
{/if}

