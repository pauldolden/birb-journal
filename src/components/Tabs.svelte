<script lang="ts">
	import { page } from "$app/stores";
  import { app } from "../stores/app";
	import { SearchTypes } from "../enums/SearchTypes";

  let searchType: SearchTypes = SearchTypes.TV;
  
  page.subscribe((value) => {
    const type = value.url.searchParams.get("type");
    if (type) {
      searchType = type as SearchTypes;
      app.update((app) => {
        app.searchType = searchType;
        return app;
      });
    }
  });


</script>

<div class="tabs tabs-boxed justify-center">
  <a href={`${$page.url.pathname}?type=${SearchTypes.TV}`} class={`tab tab-lg flex-1 ${ searchType === SearchTypes.TV ? "tab-active" : ""}`}>TV Shows</a> 
  <a href={`${$page.url.pathname}?type=${SearchTypes.MOVIE}`} class={`tab tab-lg flex-1 ${ searchType === SearchTypes.MOVIE ? "tab-active" : ""}`}>Movies</a> 
</div>
