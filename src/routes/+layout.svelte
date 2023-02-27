<script>
  import "../app.css";
	import Header from "../components/Header.svelte";
	import Nav from "../components/Nav.svelte";
</script>

<section data-theme="lofi" class="min-h-[120vh] min-w-screen">
  <Header />
  <slot />
  <Nav />
</section>
