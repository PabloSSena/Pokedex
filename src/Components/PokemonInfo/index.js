import React from 'react';
import '../../styles/global.css';
import './styles.css';
import Header from '../Header';
import Axios from 'axios';

export default class PokemonInfo extends React.Component{
    state = {
        name:'',
        pokemonIndex:'',
        imagemurl:'',
        types: [],
        description:'',
        stats:{
            hp:'',
            ataque:'',
            defesa:'',
            velocidade:'',
            ataqEspecial:'',
            defEspecial:''
        }
    }
    async componentDidMount(){
        const {pokemonIndex} = this.props.match.params;

        const infoUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        const especiePokemon = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

        const infoResponse = await Axios.get(infoUrl);

        const name = infoResponse.data.name;
        const imageurl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png` 

        let {hp,ataque,defesa,velocidade,ataqEspecial,defEspecial} = '';
    }
    render(){
        return(
            <Header/>
        );
    }
}