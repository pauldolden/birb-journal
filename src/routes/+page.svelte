<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
  import { app } from "../stores/app";

  onMount(() => {
    goto(`/search?type=${$app.searchType}`)
  });
</script>
