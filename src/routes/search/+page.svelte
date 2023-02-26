<script lang="ts">
  import Results from "../../components/Results.svelte";
  import type { Results as ResultsType } from "../../stores/results";
  import { results } from "../../stores/results";
  import { onMount } from 'svelte';

  let searchResults: ResultsType

  results.subscribe((value) => {
    searchResults = value;
  });

  // implement an intersection observer to load more results
  // when the user scrolls to the bottom of the page
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("intersecting");
    }
  }, { threshold: 1 });
  const element = document.getElementById("observer") as HTMLElement;
  onMount(() => {
    observer.observe(element);
  });
</script>

<Results {searchResults} />
<div id="observer" />

