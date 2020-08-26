import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './styles/global.css';
import './styles/header.css';
import './styles/pokedexfilter.css';

function App() {
  return (
    <>
      <header>
        <h1>Pokédex</h1>
      </header>

      <body>
        <pokedexfilter>
          <inputcontrol>
            <h1>Qual pokemon deseja encontrar?</h1>
            <InputGroup className="mb-3">
            <FormControl
            placeholder="Nome do pokemn"
            aria-label="Nome do pokemon"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
            <Button variant="outline-secondary">Pesquisar</Button>
            </InputGroup.Append>
            </InputGroup>
          </inputcontrol>  
        </pokedexfilter>
      </body>
    </>
  );
}

export default App;
