<script lang="ts">
  import type { Show } from "../interfaces/Shows";
  import type { Movie } from "../interfaces/Movies";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  export let data: Movie | Show

  const poster = data.poster_path
    ? `${IMAGE_PATH}${data.poster_path}`
    : "/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg";
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={poster} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
