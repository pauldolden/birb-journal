<script lang="ts">
  import type { Show } from "../interfaces/Shows";

  export let result: Show;
  
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

  const poster = result.poster_path
    ? `${IMAGE_PATH}${result.poster_path}`
    : null;
</script>

<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={poster} alt={result.name} /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>{result.overview}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
