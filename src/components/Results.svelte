<script lang="ts">
  import { results } from "../stores/results";

  results.subscribe((value) => {
    console.log(value);
  });
  
</script>
