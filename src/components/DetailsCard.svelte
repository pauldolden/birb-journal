<script lang="ts">
	import { isShow, type Show } from '../interfaces/Shows';
	import type { Movie } from '../interfaces/Movies';
	import Birb from './Birb.svelte';
	import type { UpdateParams } from '../interfaces/UpdateParms';
	import type { Rating } from '../interfaces/Rating';
  import { api } from '../config/api';

	export let result: Show | Movie;
  export let rating: Rating

  let nRating = rating?.n_rating ?? 0
  let mRating = rating?.m_rating ?? 0
  $: aRating = Math.floor((nRating + mRating) / 2)

  let watched: boolean | null = rating?.watched ?? null

  $: if(nRating === 0 && mRating === 0) watched = null
  $: if(nRating !== 0 || mRating !== 0) watched = true

	const title = isShow(result) ? result.name : result.title;
	const year = isShow(result)
		? new Date(result.first_air_date).getFullYear()
		: new Date(result.release_date).getFullYear();
  const type = isShow(result) ? 'tv' : 'movie';

	const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

	const poster = result.poster_path ? `${IMAGE_PATH}${result.poster_path}` : null;

  $: updateParams = {
    id: rating.id,
    tmdb_id: result.id,
    title,
    year,
    poster_path: poster as string,
    description: result.overview,
    n_rating: nRating,
    m_rating: mRating,
    watched: true,
    type,
  } as UpdateParams

  const watchListParams = {
    tmdb_id: result.id,
    title,
    year,
    poster_path: poster as string,
    description: result.overview,
    watched: false,
    type,
  } as UpdateParams


  async function addToWatchList() {
    try {
      const res = await api.post('/set-rating', watchListParams);

      if (res.status === 200) {
        watched = false
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function removeFromWatchlist() {
    try {
      const res = await api.post('/set-rating', {
        ...watchListParams,
        watched: null,
      });

      if (res.status === 200) {
        watched = false
      }
    } catch (error) {
      console.log(error);
    }
  }

	const arr = new Array(10).fill(0);
</script>

<div class="card w-screen bg-base-100 shadow-xl image-full rounded-none">
	<figure><img src={poster} alt={title} /></figure>
	<div class="card-body">
		<h2 class="card-title">
			{`${title} (${year})`}
		</h2>
		<p>{result.overview}</p>
		<div class="w-full flex flex-col items-center gap-5">
			<div class="flex items-center gap-5">
        <button>
          <h3 class="text-2xl font-logo font-bold">N</h3>
        </button>
				<div class="flex gap-2">
					{#each arr as _, i}
						<Birb index={i} bind:rating={nRating} field_name="n_rating" updateParams={updateParams} />
					{/each}
				</div>
			</div>
			<div class="w-full flex flex-col items-center gap-5">
				<div class="flex items-center gap-5">
        <button>
          <h3 class="text-2xl font-logo font-bold">M</h3>
        </button>
					<div class="flex gap-2">
						{#each arr as _, i}
							<Birb index={i} bind:rating={mRating} field_name="m_rating" updateParams={updateParams} />
						{/each}
					</div>
				</div>
			</div>
			<div class="w-full flex flex-col items-center gap-5 mt-5">
				<div class="flex items-center gap-5">
					<h3 class="text-2xl font-logo font-bold">A</h3>
					<div class="flex gap-2">
						{#each arr as _, i}
							<Birb index={i} bind:rating={aRating} adjustable={false} field_name="" updateParams={updateParams} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="flex p-2 gap-2">
  {#if watched === null}
    <button class="btn btn-primary flex-1" on:click={addToWatchList}>Add to Watchlist</button>
  {:else if watched === false}
    <button class="btn btn-secondary flex-1" on:click={removeFromWatchlist}>On Watchlist</button>
  {:else if watched === true}
    <button class="btn btn-success flex-1" disabled on:click={addToWatchList}>Watched</button>
  {/if}

</div>

<style>
  .card.image-full:before {
    border-radius: 0;
  }
</style>
