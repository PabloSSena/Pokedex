import React from 'react';
import axios from 'axios';
import CardPokemon from '../CardPokemon';
import './styles.css'

export default class Pokemons extends React.Component{
    state = {
        url: "https://pokeapi.co/api/v2/pokemon/",
        pokemon:null
    }

    async componentDidMount(){
        const response = await axios.get(this.state.url);
        this.setState({pokemon:response.data['results']});
    }

    render(){
        return(
            <>
                {this.state.pokemon ? (
                    <container>
                        {this.state.pokemon.map(pokemon => (
                            <CardPokemon/>
                        ))} 
                     </container>     
                ) :
                (<h1>Teste para falha</h1>)}    
            </>    
             
  
    );
    }

}

