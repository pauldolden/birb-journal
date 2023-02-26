<script lang="ts">
	import type { Results } from '../stores/results';
	import Card from '../components/Card.svelte';

	export let searchResults: Results;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each searchResults.results as result}
    <a href={`/details/${result.id}`}>
      <Card {result} />
    </a>
	{/each}
</div>
