<script>
    import { Router, Link, Route } from 'svelte-routing';
    import Home from '../home/Home.svelte';

    
</script>

<header class="container-fluid">
    <div class="header row">
        <div class="col">
           <Router>
                <nav class="link">
                    <Link to="/">Home</Link>
                    <Link to="pokedex">Pokedex</Link>
                </nav>
            </Router>
        </div>
    </div>
</header>

<style>
    header {
        height: 65px;
        background-color: #ef5350;
        padding: 0;
        margin: 0;
    }
    .header{
        padding: 20px;
    }

    .header .link {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .link {
        width: 100%;
    }
    :global(a) {
        color: #fff !important;
        font-weight: 500;
        margin-right: 4%;
    }

</style>