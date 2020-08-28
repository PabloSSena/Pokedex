import React from 'react';
import Header from '../Header';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './styles.css';
import { Link } from 'react-router-dom';


const CoresPraCadaTipo = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
  };

export default class PokemonInfo extends React.Component{
    state = {
        name:'',
        pokemonIndex:'',
        imagemurl:'',
        types: [],
        stats:{
            hp:'',
            attack:'',
            defense:'',
            speed:'',
            specialAttack:'',
            specialDefense:''
        },
        height:'',
        weight:'',
        abilities:'',
        order:''
    }

    async componentDidMount(){
        const {pokemonIndex} = this.props.match.params;

        const infoUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        const imgGetter = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`
        const especiePokemon = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

        const infoResponse = await Axios.get(infoUrl);
        const savior = await Axios.get(imgGetter);

        const name = infoResponse.data.name;
        const order = infoResponse.data.id;
        const imageurl = `https://pokeres.bastionbot.org/images/pokemon/${order}.png` 
        
        console.log(imageurl) 

        var {hp,attack,defense,speed,specialAttack,specialDefense} = '';

        infoResponse.data.stats.map(stat => {
            switch(stat.stat.name){
                case 'hp':
                    hp = stat["base_stat"];
                break;

                case 'attack':
                    attack = stat['base_stat'];
                break;
                    
                case 'defense':
                    defense = stat['base_stat'];
                break;
                
                case 'speed':
                    speed = stat['base_stat'];
                    break;
                
                case 'special-attack':
                    specialAttack = stat['base_stat'];
                break;    
                
                case 'special-defense':
                    specialDefense = stat['base_stat'];
                break;          
            }
        });
    
        const height = infoResponse.data.height;
        const weight = infoResponse.data.weight;
        const types = infoResponse.data.types.map(type => type.type.name);
        const abilitieUrl = infoResponse.data.abilities.map(abilitie =>{
            return(
                abilitie.ability.url
            );
        })
        
        console.log(abilitieUrl);
        const abilities = infoResponse.data.abilities.map(ability => {
            return(
                ability.ability.name
            );    
        });

        this.setState({
            imageurl,
            pokemonIndex,
            especiePokemon,
            name,
            stats:{
                hp,
                attack,
                defense,
                speed,
                specialAttack,
                specialDefense
            },
            height,
            weight,
            types,
            abilities,
            order

        })
    }

    render(){
        return(
           <> 
           <div className='change-local'>
            
                <Header/>
       
            </div>
              {this.state.types.map(type =>(
                <div className='container' style={{backgroundColor:`#${CoresPraCadaTipo[type]}`}}>
                    <div className='info'>

                        <Card>                
                            <Card.Img                 
                                variant="top"
                                src={this.state.imageurl}
                                />
                            </Card>

                        <h6>Tamanho:{this.state.height}</h6>
                        <h6>Peso:{this.state.weight}</h6>
                        <h6>#{this.state.order}</h6>
                        <h1>{this.state.name}</h1>
                            

                        <div className="tipos">
                            {this.state.types.map(type => (
                              <Link to={`/type/${type}`}>
                                <span key={type}
                                    className="badge  badge-pill mr1">{type}</span>
                              </Link>        
                            ))}
                        </div>

                        <h5>Hp:{this.state.stats.hp}</h5>
                        <ProgressBar variant="success" now={this.state.stats.hp} />

                        <h5>Ataque:{this.state.stats.attack}</h5>
                        <ProgressBar variant="danger" now={this.state.stats.attack} />

                        <h5>Defesa:{this.state.stats.defense}</h5>
                        <ProgressBar variant="warning" now={this.state.stats.defense} />

                        <h5>Velocidade:{this.state.stats.speed}</h5>
                        <ProgressBar variant="info" now={this.state.stats.speed} />

                        <h4>Habilidades</h4>
                        <div className='habilidades'>
                            <h3>{this.state.abilities[0]}</h3>
                            <h3>{this.state.abilities[1]}</h3>
                        </div>

                    </div>    
                </div>
            ))}
            
            
         
           </> 
        );
    }
}