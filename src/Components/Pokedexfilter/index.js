import React,{useEffect} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import './styles.css';


const App = () =>{
    const pegarPokemon = async () =>{
        const vetor=[];

        try{
          const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu';
          const res = await Axios.get(pokemonUrl)
          vetor.push()
          console.log(res)
        } catch(e){
          console.log(e)
        }
    };

    const handleChange = (e) => {
      const pokemon = e.target.value.toLowerCase()
      console.log(pokemon)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      getPokemon();
    }

    return(
        <pokedexfilter>
          <h1>Qual pokemon deseja<br/> encontrar?</h1>
          <inputcontrol>
            <InputGroup className="mb-3" onSubmit={handleSubmit}>
            <FormControl
            placeholder="Nome do pokemon"
            aria-label="Nome do pokemon"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append onChange={handleChange}>
            <Button variant="outline-secondary">Pesquisar</Button>
            </InputGroup.Append>
            </InputGroup>
          </inputcontrol>  
        </pokedexfilter>  
    );
}

export default App;