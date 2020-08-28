import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from '../Header'
import './styles.css'
import Axios from 'axios';

export default class CardPokemon extends React.Component{
    state = {
        nomePokemon: '',
        imageurl:'',
        indexPokemon:'',
        pokemons:'',
        pokenames:[],
        pokepictures:'',
        pokemontype:''    
    };

    async componentDidMount(){
        const {pokemontype} = this.props.match.params;

        const url = `https://pokeapi.co/api/v2/type/${pokemontype}/`;
        const infos = await Axios.get(url);

       
        const pokemons = infos.data.pokemon;
        const pokenames = infos.data.pokemon.map(pokemon => pokemon.pokemon.name);
    

        console.log(pokenames);
        this.setState({
            pokemons,
            pokenames,
            pokemontype
        
        });
    }

    render(){
    return(
    <>  
        <Header/>

        <div className='explicacao'>
            <h1>Todos os Pokémons do tipo {this.state.pokemontype}:</h1>
        </div>
        <container>
            {this.state.pokenames.map(pokemon =>(
                <>
                <div className='presentation'>
                    <img src={`https://img.pokemondb.net/sprites/x-y/normal/${pokemon}.png`}/>
                    <span key={pokemon}>{pokemon}</span>
                </div>
                
                </>
        ))}
        </container>
            
       
    </>      
    );
    }

}
