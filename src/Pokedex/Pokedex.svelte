
<script>
    import {onMount} from 'svelte';
    let pokemons;

     const changePage = async (url) => {
        const res = await fetch(url);
        pokemons = await res.json();
    }

    changePage(`https://pokeapi.co/api/v2/pokemon?offset=10&limit=10`);


</script>
{#if pokemons !== undefined}
<div class="container cont">
    <div class="row">
        {#each pokemons.results as pokemon}
            <div class="col-lg-4">
                <label>{pokemon.name}</label>
            </div>
        {/each}
    </div>
</div>
{/if}

<style>
    .cont {
        background-color: #fff;


    }
</style>