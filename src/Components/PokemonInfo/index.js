import React,{ImageBackground} from 'react';
import '../../styles/global.css';
import './styles.css';
import Header from '../Header';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
            <Header/>
            <div className='container'>
                <div className='info'>
                    <Card>                
                        <Card.Img                 
                            variant="top"
                            src={this.state.imageurl}
                            />
                        </Card>
                    <h1>{this.state.name}</h1>    
                
                </div>    
            </div>
            
         
           </> 
        );
    }
}