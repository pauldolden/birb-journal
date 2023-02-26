<script lang="ts">
  import type { Show } from "../interfaces/Shows";

  export let result: Show;
  export let poster: string
</script>

<img src={poster} alt={result.name} />

