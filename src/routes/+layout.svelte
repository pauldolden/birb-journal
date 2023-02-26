<script>
  import "../app.css";
	import Header from "../components/Header.svelte";
	import Nav from "../components/Nav.svelte";
	import Tabs from "../components/Tabs.svelte";
</script>

<section data-theme="halloween" class="min-h-screen min-w-screen">
  <Header />
  <Tabs />
  <slot />
  <Nav />
</section>
