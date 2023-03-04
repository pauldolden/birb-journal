<script lang="ts">
	import Card from '../components/Card.svelte';
  import { results } from '../stores/results';
  import type { Results } from '../stores/results';

 let  items: Results | any;

  results.subscribe((value) => {
    items = value
  })

</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#if items.searchQuery && items.results.length === 0}
    <p class="text-center py-5">No results found</p>
  {/if}
	{#each items.results as result}
    <a href={`/details/${result?.tmdb_id ?? result?.id}`}>
      <Card {result} />
    </a>
	{/each}
</div>
