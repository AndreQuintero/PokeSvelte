<script>
    import { Col, Container, Row, Button, Form, FormGroup, FormText, Input, Label } from "sveltestrap";
    import {getPokemons} from './PokemonService.js';
    import {BASE_URL, URL_POKEMON}  from '../Url.js';
    import { onMount } from 'svelte';
    import PokeCard from './PokeCard.svelte';

    export let name;
    let pokemon;
   
    onMount( async () => {
        const res = await fetch(`${BASE_URL}/${URL_POKEMON}/${name}`);
        pokemon = await res.json();
    });
       
 

</script>

{#if pokemon !== undefined}
<div class="container">
    <div class="row mt-10-n">
        <div class="col-lg-12 alg-flex-c">
            <PokeCard  {pokemon} />
        </div>
    </div>
</div>
{/if}


<style>
    :global(body) {
        background-color: #f7f7f7;
    }

    .container {
        background-color: #fff;
        margin-top: 5%;
        padding: 5%;
    }

  

    .mt-10-n{
        margin-top: -10%;
    }

    .alg-flex-c{
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>