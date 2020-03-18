<script>
    export let pokemon;

</script>

<div class="card">
    <div class="row m0">
        <div class="col-lg-12 card-header">
            <figure>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}>
            </figure>
        </div>
    </div>
    <div class="row m0">
        <div class="col-lg-12 pk-name">
            <h4>{pokemon.name}</h4>
        </div>
        <div class="col-lg-9 skills">
            {#each pokemon.abilities as ability}
                <div>{ability.ability.name}</div>
            {/each}
        </div>
        <div class="col-lg-12 weight">
            <div>{pokemon.weight} Kg</div>
        </div>
        <div class="col-lg-12 poke-type">
            {#each pokemon.types as type}
                <span>{type.type.name}</span>
            {/each}
        </div>
    </div>
</div>

<style>
  .card {
        width: 45%;
        border-radius: 10px;
        min-height: 400px;
    }

    figure {
        text-align: center;
    }

    figure img {
        margin-top: 1%;
    }

     .m0{
        margin: 0;
    }

    .card-header {
        height: 70px;
        background-color: #32354d;
        border-radius: 10px 10px 0 0;
    }

    .pk-name{
        text-align: center;
        margin-top: 3%;
    }

    .pk-name::first-letter{
        text-transform: uppercase;
    }

    .poke-type{
        padding: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 80%;
    }

    .poke-type span {

        background-color: #1c9f90;
        color: #fff;
        padding: 2%;
        border-radius: 5px;
        margin-right: 5px;
        min-width: 100px;
        text-align: center;

    }

    .poke-type span::first-letter {
        text-transform: uppercase;
    }

    .skills {
        margin-top: 5%;
        text-align: center;
        margin: auto;
    }
    .skills div {
        background-color: #ff996e;
        color: #fff;
        padding: 2%;
        border-radius: 5px;
        width: 100%;
        text-align: center;
        margin-top: 5%;
    }

    .skills div::first-letter  {
        text-transform: uppercase;
    }

    .weight {
        margin-top: 5%;
    }

    .weight div {
        font-weight: 700;
        background-color: #fffd82;
        color: #fff;
        padding: 2%;
        border-radius: 5px;
        width: 50%;
        text-align: center;
        margin: auto;
    }
</style>