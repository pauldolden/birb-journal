<script>
  import "../app.css";
	import Header from "../components/Header.svelte";
	import Nav from "../components/Nav.svelte";
</script>

<section data-theme="halloween" class="min-h-screen min-w-screen">
  <Header />
  <slot />
  <Nav />
</section>
