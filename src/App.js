import React from 'react';
import './styles/global.css';
import Pokemons from './Components/Pokemons';
import Pokedexfilter from './Components/Pokedexfilter';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header/>

      <body>
        <Pokedexfilter/>
        
        <Pokemons/>

      </body>
    </>  
  );
}

export default App;
