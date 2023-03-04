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
	{#each items.results as result}
    <a href={`/details/${result?.tmdb_id ?? result?.id}`}>
      <Card {result} />
    </a>
	{/each}
</div>
