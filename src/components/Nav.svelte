<script lang="ts">
	import { page } from "$app/stores";
  import { app } from "../stores/app";
</script>

<div class="btm-nav">
  <a href={`/search?type=${$app.searchType}`} class={`text-primary ${ $page.url.pathname === "/search" ? "active" : ""}`}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  </a>
  <a href={`/ratings/?type=${$app.searchType}`} class={`text-primary ${ $page.url.pathname === "/ratings" ? "active" : ""}`}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  </a>
  <a href={`/watchlist/?type=${$app.searchType}`} class={`text-primary ${ $page.url.pathname === "/ratings" ? "active" : ""}`}>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 32 32">
      <title>tv</title>
      <path d="M30.662 9.003c-2.775-0.399-5.731-0.688-8.815-0.851l5.153-5.153-2-2-7.017 7.017c-0.656-0.011-1.317-0.017-1.983-0.017v0l-8-8-2 2 6.069 6.069c-3.779 0.133-7.386 0.454-10.731 0.935-0.86 3.366-1.338 7.086-1.338 10.997s0.477 7.63 1.338 10.997c4.489 0.645 9.448 1.003 14.662 1.003s10.173-0.358 14.662-1.003c0.86-3.366 1.338-7.086 1.338-10.997s-0.477-7.63-1.338-10.997zM26.997 27.331c-3.367 0.43-7.086 0.669-10.997 0.669s-7.63-0.239-10.997-0.669c-0.645-2.244-1.003-4.724-1.003-7.331s0.358-5.087 1.003-7.331c3.366-0.43 7.086-0.669 10.997-0.669s7.63 0.239 10.996 0.669c0.645 2.244 1.004 4.724 1.004 7.331s-0.358 5.087-1.003 7.331z"></path>
    </svg>
  </a>
</div>
