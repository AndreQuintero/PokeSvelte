<script>
	import Home from './home/Home.svelte';
	import { Router, Link, Route } from "svelte-routing";
	import Pokemon from './Pokemon/Pokemon.svelte';
	import Pokedex from './Pokedex/Pokedex.svelte';
	import Header from './shared/Header.svelte';
	export let url = "";
</script>

<Header />
<main>
	<Router url="{url}">
		<Route path="pokemon/:name" component="{Pokemon}" />
		<Route path="/"><Home /></Route>
		<Route path="pokedex" component="{Pokedex}" />
	</Router>
</main>
<style>
:global(html){
    font-size: 16px;
}

:global(body){
    margin: 0;
    padding: 0 ;
    font-family: 'Poppins', sans-serif;
}

</style>