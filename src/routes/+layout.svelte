<script>
  import "../app.css";
	import Header from "../components/Header.svelte";
	import Nav from "../components/Nav.svelte";
</script>

<section data-theme="dracula" class="min-h-screen pb-[4rem] min-w-screen">
  <Header />
  <slot />
  <Nav />
</section>
