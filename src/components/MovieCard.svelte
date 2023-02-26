<script lang="ts">
  import type { Movie } from "../interfaces/Movies";
  export let result: Movie;  
  export let poster: string;
</script>

<img src={poster} alt={result.title} />

