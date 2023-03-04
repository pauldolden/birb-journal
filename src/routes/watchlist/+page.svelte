<script lang="ts">
	import { onMount } from 'svelte';
	import Results from '../../components/Results.svelte';
	import { getWatchlist } from '../../utils/getWatchlist';

	onMount(async () => {
		await getWatchlist();
	});
</script>

<div class="container pb-[4rem]">
	<Results />
</div>
