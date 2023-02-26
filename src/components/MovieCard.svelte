<script lang="ts">
  import type { Movie } from "../interfaces/Movies";
  export let result: Movie;  
  export let poster: string;
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
