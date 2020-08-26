import React from 'react';
import './styles/global.css';
import './styles/header.css';
import Pokemons from './Components/Pokemons';
import Pokedexfilter from './Components/Pokedexfilter';

function App() {
  return (
    <>
      <header>
        <h1>Pokédex</h1>
      </header>

      <body>
        <Pokedexfilter/>

        <Pokemons/>
      </body>
    </>  
  );
}

export default App;
