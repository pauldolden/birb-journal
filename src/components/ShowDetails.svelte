<script lang="ts">
  import type { Show } from "../interfaces/Shows";
	import Birb from "./Birb.svelte";

  export let result: Show;
  
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

  const poster = result.poster_path
    ? `${IMAGE_PATH}${result.poster_path}`
    : null;

  const arr = new Array(10).fill(0);
</script>

<div class="card w-screen bg-base-100 shadow-xl image-full rounded-none">
  <figure><img src={poster} alt={result.name} /></figure>
  <div class="card-body">
    <h2 class="card-title">{`${result.name} (${new Date(result.first_air_date).getFullYear()})`}</h2>
    <p>{result.overview}</p>
    <div class="w-full flex flex-col items-center gap-5">
      <div class="flex items-center gap-5">
        <h3 class="text-2xl font-logo font-bold">N</h3>
        <div class="flex gap-2">
          {#each arr as _, i}
            <Birb />
          {/each}
        </div>
      </div>
      <div class="w-full flex flex-col items-center gap-5">
        <div class="flex items-center gap-5">
        <h3 class="text-2xl font-logo font-bold">M</h3>
          <div class="flex gap-2">
            {#each arr as _, i}
              <Birb />
            {/each}
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col items-center gap-5 mt-5">
        <div class="flex items-center gap-5">
        <h3 class="text-2xl font-logo font-bold">A</h3>
          <div class="flex gap-2">
            {#each arr as _, i}
              <Birb />
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
