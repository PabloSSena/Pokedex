import React from 'react';
import axios from 'axios';
import CardPokemon from '../CardPokemon';
import {Animated} from "react-animated-css";
import './styles.css'

export default class Pokemons extends React.Component{
    state = {
        url: "https://pokeapi.co/api/v2/pokemon/?limit=891",
        pokemon:null,
    }

    async componentDidMount(){
        const response = await axios.get(this.state.url);
        this.setState({pokemon:response.data['results']});
    }

    render(){
        return(
            <>
                {this.state.pokemon ? (
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                        <container>
                            {this.state.pokemon.map(pokemon => (
                                <CardPokemon
                                    key={pokemon.name}
                                    nomePokemon = {pokemon.name}
                                    imgURL = {pokemon.url}
                                />
                            ))} 
                        </container>   
                    </Animated>      
                ) :
                (<h1>Carregando</h1>)}    
            </>    
             
  
    );
    }

}

