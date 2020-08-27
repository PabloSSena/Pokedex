import React,{ImageBackground} from 'react';
import '../../styles/global.css';
import './styles.css';
import Header from '../Header';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
            ataque:'',
            defesa:'',
            velocidade:'',
            ataqEspecial:'',
            defEspecial:''
        },
        height:'',
        weight:'',
        abilities:''
    }

    async componentDidMount(){
        const {pokemonIndex} = this.props.match.params;

        const infoUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        const especiePokemon = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

        const infoResponse = await Axios.get(infoUrl);

        const name = infoResponse.data.name;
        const imageurl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png` 

        let {hp,ataque,defesa,velocidade,ataqEspecial,defEspecial} = '';

        infoResponse.data.stats.map(stat => {
            switch(stat.stat.name){
                case 'hp':
                    hp = stat['base_stat'];
                break;

                case 'attack':
                    ataque = stat['base_stat'];
                break;
                    
                case 'defense':
                    defesa = stat['base_stat'];
                break;
                
                case 'speed':
                    velocidade = stat['base_stat'];
                    break;
                
                case 'special-attack':
                    ataqEspecial = stat['base_stat'];
                break;    
                
                case 'special-defense':
                    defEspecial = stat['base_stat'];
                break;
                default:            
            }
        });
    
        const height = infoResponse.data.height;
        const weight = infoResponse.data.weight;
        const types = infoResponse.data.types.map(type => type.type.name);
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
                hp:'',
                ataque:'',
                defesa:'',
                velocidade:'',
                ataqEspecial:'',
                defEspecial:''
            },
            height,
            weight,
            types,
            abilities

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
                    <h4>#{this.state.pokemonIndex}</h4>
                    <h1>{this.state.name}</h1>    

                    <div className="tipos">
                        {this.state.types.map(type => (
                            <span key={type}
                                className="badge  badge-pill mr1">{type}</span>
                        ))}
                    </div>
                </div>    
            </div>
            ))}
            
            
         
           </> 
        );
    }
}