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
        pokemons:[]     
    };

    async componentDidMount(){
        const {pokemontype} = this.props.match.params;

        const url = "https://pokeapi.co/api/v2/type/";
        const infos = await Axios.get(url);

       
        const pokemons = infos.data.name;
        this.setState({
            pokemons
        });
    }

    render(){
    return(
    <> 
                <container>
                <Card style={{ width: '15rem'}}>                
                {/* <Card.Img                 
                    variant="top"
                    src={this.state.imageurl}
                    /> */}
                    <Card.Body>
                        <Card.Title>{this.state.pokemons.name}</Card.Title>
                        <Card.Text>
                                                
                        </Card.Text>
                        <Button variant="primary">Informações</Button>
                    </Card.Body>
                </Card>         
        </container>
            
       
    </>      
    );
    }

}
