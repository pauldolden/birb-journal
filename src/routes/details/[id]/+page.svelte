<script lang="ts">
  import type { Movie } from "../../../interfaces/Movies";
  import type { Show } from "../../../interfaces/Shows";
  import DetailsCard from "../../../components/DetailsCard.svelte";

  interface Data {
    result: Show | Movie;
  }

  export let data: Data
</script>

<DetailsCard result={data.result} />


