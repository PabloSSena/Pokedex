import React from 'react';
import axios from 'axios';
import CardPokemon from '../CardPokemon';
import './styles.css'

export default class Pokemons extends React.Component{
    state = {
        url: "https://pokeapi.co/api/v2/pokemon/",
        pokemon:null
    }

    componentDidMount(){

    }

    render(){
        return(
            <container>
                    <CardPokemon/>
                    <CardPokemon/>
                    <CardPokemon/>         
            </container>   
  
    );
    }

}

