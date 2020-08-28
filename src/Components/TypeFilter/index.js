import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './styles.css'
import Axios from 'axios';

export default class CardPokemon extends React.Component{
    state = {
        nomePokemon: '',
        imageurl:'',
        indexPokemon:'',
        pokemons:'',
        pokenames:[]    
    };

    async componentDidMount(){
        const {pokemontype} = this.props.match.params;

        const url = `https://pokeapi.co/api/v2/type/${pokemontype}/`;
        const infos = await Axios.get(url);

       
        const pokemons = infos.data.pokemon;
        const pokenames = infos.data.pokemon.map(pokemon => pokemon.pokemon.name);
        console.log(pokenames);
        this.setState({
            pokemons
        });
    }

    render(){
    return(
    <> 
                <container>
                {this.state.pokenames.map(pokemon =>(
                                <span key={pokemon}{...pokemon}></span>
                            ))}
                <Card style={{ width: '15rem'}}>                
                {/* <Card.Img                 
                    variant="top"
                    src={this.state.imageurl}
                    /> */}
                    <Card.Body>
                        <Card.Title>
                            <span>{this.state.pokenames[1]}</span>
                            {/* {this.state.pokenames.map(pokemon =>(
                                <span key={pokemon}{...pokemon}></span>
                            ))} */}
                        </Card.Title>
                        <Card.Text>
                                                
                        </Card.Text>
                        <Button variant="primary">Informações</Button>
                    </Card.Body>
                </Card>
                
                {this.state.pokenames.map(pokemon =>(
                                <h1 key={pokemon}{...pokemon}></h1>
                            ))}         
        </container>
            
       
    </>      
    );
    }

}
