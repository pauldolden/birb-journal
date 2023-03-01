<script lang="ts">
	import type { Results } from '../stores/results';
	import Card from '../components/Card.svelte';

	export let searchResults: Results;


</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#if !searchResults.searchQuery}
    <p class="text-center py-5">Search for something, stupid.</p>
  {/if}
  {#if searchResults.searchQuery && searchResults.results.length === 0}
    <p class="text-center py-5">No results found</p>
  {/if}
	{#each searchResults.results as result}
    <a href={`/details/${result.id}`}>
      <Card {result} />
    </a>
	{/each}
</div>
