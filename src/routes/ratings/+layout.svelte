<script lang="ts">
  import Search from "../../components/Search.svelte";
	import Tabs from "../../components/Tabs.svelte";

</script>

<div class="flex flex-col">
  <Search />
  <Tabs />
  <slot />
</div>

