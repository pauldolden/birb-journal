<script lang="ts">
  import Results from "../../components/Results.svelte";
  import type { Results as ResultsType } from "../../stores/results";
  import { results } from "../../stores/results";

  let searchResults: ResultsType

  results.subscribe((value) => {
    searchResults = value;
  });
</script>

<Results {searchResults} />

