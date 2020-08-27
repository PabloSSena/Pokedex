import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './stylesCard.css'

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
        const imageurl = `https://pokeres.bastionbot.org/images/pokemon/${indexPokemon}.png` 
       
        this.setState({

            nomePokemon, 
            imageurl,
            indexPokemon,
        });
    }

    render(){
        
    return(
    <>    
        <container>
            <Link to={`pokemoninfo/${this.state.indexPokemon}`}>
                <Card style={{ width: '15rem'}}>                
                <Card.Img                 
                    variant="top"
                    src={this.state.imageurl}
                    />
                <Card.Body>
                        <Card.Title>{this.state.nomePokemon}</Card.Title>
                        <Card.Text>
                                                
                        </Card.Text>
                        <Button variant="primary">Informações</Button>
                    </Card.Body>
                </Card>
            </Link>         
        </container>
    </>      
    );
    }

}
