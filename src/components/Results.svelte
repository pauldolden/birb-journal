<script lang="ts">
  import type { Results } from "../stores/results";
  import Card from "../components/Card.svelte";

  export let searchResults: Results;
</script>

{#each searchResults.results as result}
  <Card {result} />
{/each}

