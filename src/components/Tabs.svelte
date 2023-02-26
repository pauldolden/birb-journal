<script lang="ts">
	import { page } from "$app/stores";
  import { app } from "../stores/app";
	import { SearchTypes } from "../enums/SearchTypes";
  const searchType: SearchTypes = $page.url.searchParams.get("type") as SearchTypes || SearchTypes.TV;

  app.update((app) => {
    app.searchType = searchType;
    return app;
  });
</script>

<div class="tabs tabs-boxed justify-center">
  <a href={`${$page.url.pathname}?type=${SearchTypes.TV}`} class={`tab tab-lg ${ searchType === SearchTypes.TV ? "tab-active" : ""}`}>TV Shows</a> 
  <a href={`${$page.url.pathname}?type=${SearchTypes.MOVIE}`} class={`tab tab-lg ${ searchType === SearchTypes.MOVIE ? "tab-active" : ""}`}>Movies</a> 
</div>
