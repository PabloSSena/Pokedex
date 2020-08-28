import React,{useEffect, useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './styles.css';


export default class PokedexFilterString extends React.Component{ 
    constructor(){
      super();

      this.state = {
        nome:"",
      }

      this.onChange = (e) =>{
        this.setState({nome:e.target.value});
        
      }
    }
    
    render(){
    return(
        <pokedexfilter>
          <h1>Qual pokemon deseja<br/> encontrar?</h1>
        
          <inputcontrol>
              <InputGroup className="mb-3">
              <FormControl onChange={this.onChange} nome='pokemon'
              placeholder="Nome do pokemon !!Apenas letras minusculas!!"
              aria-label="Nome do pokemon"
              aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
              <Link to={`/pokemoninfoString/${this.state.nome}`}>
                  <Button variant="outline-secondary" >Pesquisar</Button>
              </Link>
              </InputGroup.Append>
              </InputGroup>
          </inputcontrol>  
        </pokedexfilter> 
         
    );
    }  
}
