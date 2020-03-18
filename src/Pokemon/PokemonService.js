import {BASE_URL, URL_POKEMON}  from '../Url.js';

export const getPokemons = async (pokemonName) => {
    const resp = await fetch(`${BASE_URL}/${URL_POKEMON}/${pokemonName}`)
    const json = await resp.json();
    return json;
} 