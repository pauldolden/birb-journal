<script lang="ts">
  import type { Movie } from "../../../interfaces/Movies";
  import type { Show } from "../../../interfaces/Shows";
  import { onMount } from "svelte";

  export let result: Movie | Show

  onMount(() => {
    console.log(result);
  });
</script>
