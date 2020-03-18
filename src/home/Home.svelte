<script>
    import { Col, Container, Row, Button, Form, FormGroup, FormText, Input, Label } from "sveltestrap";
    import {Link } from 'svelte-routing';
    
    let pokemon = '';
</script>

<Container>
    <Row>
        <Col xs="12">
            <div class="search">
                <Form class="teste">
                    <div class="row form-group">
                        <input type="text" bind:value={pokemon} placeholder="Digite o nome de um pokemon" class="form-control col-8">
                        <Link to="/pokemon/{pokemon}"><button outline class="btn btn-danger">Buscar</button></Link>
                    </div>
                </Form>
            </div>
        </Col>
    </Row>
</Container>

<style>
    .search {
        margin-top: 19%;
    }

    .btn-danger{
        margin-left: 15px
    }

    .form-group {
       display: flex;
       justify-content: center;
    }

</style>