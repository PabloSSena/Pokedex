import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './styles.css'


function CardPokemon(){
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

            <card2>
                <Card style={{ width: '15rem'}}>
                <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png" />
                <Card.Body>
                    <Card.Title>Bulbasauro</Card.Title>
                        <Card.Text>
                            Pokemon inicial
                        </Card.Text>
                        <Button variant="primary">Mais info</Button>
                    </Card.Body>
                </Card>
            </card2>    

            <card3>
                <Card style={{ width: '15rem'}}>
                <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png" />
                <Card.Body>
                    <Card.Title>Bulbasauro</Card.Title>
                        <Card.Text>
                            Pokemon inicial
                        </Card.Text>
                        <Button variant="primary">Mais info</Button>
                    </Card.Body>
                </Card>
            </card3>        

        </container>
    </>      
    );

}

export default CardPokemon;