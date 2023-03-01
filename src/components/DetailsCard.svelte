<script lang="ts">
	import { isShow, type Show } from '../interfaces/Shows';
	import type { Movie } from '../interfaces/Movies';
	import Birb from './Birb.svelte';

	export let result: Show | Movie;

  let nRating = 2
  let mRating = 9
  $: aRating = Math.floor((nRating + mRating) / 2)

	const title = isShow(result) ? result.name : result.title;
	const year = isShow(result)
		? new Date(result.first_air_date).getFullYear()
		: new Date(result.release_date).getFullYear();

	const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

	const poster = result.poster_path ? `${IMAGE_PATH}${result.poster_path}` : null;

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
				<h3 class="text-2xl font-logo font-bold">N</h3>
				<div class="flex gap-2">
					{#each arr as _, i}
						<Birb index={i} bind:rating={nRating} field_name="n_rating" />
					{/each}
				</div>
			</div>
			<div class="w-full flex flex-col items-center gap-5">
				<div class="flex items-center gap-5">
					<h3 class="text-2xl font-logo font-bold">M</h3>
					<div class="flex gap-2">
						{#each arr as _, i}
							<Birb index={i} bind:rating={mRating} field_name="m_rating" />
						{/each}
					</div>
				</div>
			</div>
			<div class="w-full flex flex-col items-center gap-5 mt-5">
				<div class="flex items-center gap-5">
					<h3 class="text-2xl font-logo font-bold">A</h3>
					<div class="flex gap-2">
						{#each arr as _, i}
							<Birb index={i} bind:rating={aRating} adjustable={false} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="flex p-2 gap-2">
		<button class="btn btn-primary flex-1">Add to watchlist</button>
		<button class="btn btn-primary flex-1">Mark as watched</button>
</div>

<style>
  .card.image-full:before {
    border-radius: 0;
  }
</style>