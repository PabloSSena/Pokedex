import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './styles.css'


export default class CardPokemon extends React.Component{
    state = {
        nomePokemon: '',
        imageurl:'',
        indexPokemon:'',
        type:''
    };

    componentDidMount(){
        const nomePokemon = this.props.nomePokemon;
        const imgURL = this.props.imgURL;
        
        const indexPokemon = imgURL.split('/')[6];
        const imageurl = `https://pokeres.bastionbot.org/images/pokemon/${indexPokemon}.png`
        const type = `https://pokeapi.co/api/v2/type/${indexPokemon}/`
       
        this.setState({

            nomePokemon, 
            imageurl,
            indexPokemon,
            type
        });
    }

    render(){
        
    return(
    <>    
        <container>
            <Card style={{ width: '15rem'}}>                
             <Card.Img                 
                variant="top"
                src={this.state.imageurl}
                />
             <Card.Body>
                    <Card.Title>{this.state.nomePokemon}</Card.Title>
                    <Card.Text>
                        {this.state.type}
                    </Card.Text>
                    <Button variant="primary">Mais info</Button>
                </Card.Body>
            </Card>         
        </container>
    </>      
    );
    }

}
