<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import Results from "../components/Results.svelte";
  import { app } from "../stores/app";

  onMount(() => {
    goto(`/search/${$app.searchType}`)
  });
</script>

<Results />
