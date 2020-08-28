import React,{useEffect, useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import './styles.css';


const PokedexFilter = () =>{
  var pegando='';

  function pegarNome(){
    pegando = document.getElementById('pokemon').value;
    document.getElementById('Digitado').innerHTML = pegando;
  }
   
    return(
        <pokedexfilter>
          <h1>Qual pokemon deseja<br/> encontrar?</h1>
          <form>
          <inputcontrol>
              <InputGroup className="mb-3">
              <FormControl id='pokemon'
              placeholder="Nome do pokemon"
              aria-label="Nome do pokemon"
              aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
              <Button variant="outline-secondary" onClick={pegarNome} >Pesquisar</Button>
              </InputGroup.Append>
              </InputGroup>
          </inputcontrol>  
          </form>
          <h1 id="Digitado"></h1>
        </pokedexfilter> 
         
    );
}

export default PokedexFilter;