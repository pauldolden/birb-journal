<script lang="ts">
	import { onMount } from 'svelte';
	import Results from '../../components/Results.svelte';
	import { getRatings } from '../../utils/getRatings';

	onMount(async () => {
		await getRatings();
	});
</script>

<div class="container pb-[4rem]">
	<Results />
</div>
