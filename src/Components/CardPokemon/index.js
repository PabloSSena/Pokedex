import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './styles.css'


export default class CardPokemon extends React.Component{
    render(){
    return(
    <>    
        <container>
            <Card style={{ width: '15rem'}}>
             <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" />
             <Card.Body>
                 <Card.Title>Bulbasauro</Card.Title>
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
