<script lang="ts">
  import type { Movie } from "../../../interfaces/Movies";
  import type { Show } from "../../../interfaces/Shows";
  import DetailsCard from "../../../components/DetailsCard.svelte";
	import type { Rating } from "../../../interfaces/Rating";

  interface Data {
    result: Show | Movie;
    rating: Rating;
  }

  export let data: Data
</script>

<DetailsCard result={data.result} rating={data.rating} />


