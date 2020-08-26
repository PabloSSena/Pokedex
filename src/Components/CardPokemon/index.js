import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './styles.css'


export default class CardPokemon extends React.Component{
    state = {
        nomePokemon: '',
        imageurl:'',
        indexPokemon:''
    };

    componentDidMount(){
        const nomePokemon = this.props.nomePokemon;
        const imgURL = this.props.imgURL;

        const indexPokemon = imgURL.split('/')[6];
        const imageurl = `https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon${indexPokemon}.png`
        
        this.setState({

            nomePokemon, 
            imageurl,
            indexPokemon
        });
    }

    render(){
        
    return(
    <>    
        <container>
            <Card style={{ width: '15rem'}}>
             <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" />
             <Card.Body>
                    <Card.Title>{this.state.nomePokemon}</Card.Title>
                    <Card.Text>
                        Pokemon inicial
                    </Card.Text>
                    <Button variant="primary">Mais info</Button>
                </Card.Body>
            </Card>         
        </container>
    </>      
    );
    }

}
