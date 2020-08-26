import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './styles.css';

function Pokedexfilter(){
    return(
        <pokedexfilter>
          <h1>Qual pokemon deseja<br/> encontrar?</h1>
          <inputcontrol>
            <InputGroup className="mb-3">
            <FormControl
            placeholder="Nome do pokemon"
            aria-label="Nome do pokemon"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
            <Button variant="outline-secondary">Pesquisar</Button>
            </InputGroup.Append>
            </InputGroup>
          </inputcontrol>  
        </pokedexfilter>  
    );
}

export default Pokedexfilter;