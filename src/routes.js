import React from 'react';
import App from './App';
import {Switch,Route} from 'react-router-dom';
import PokemonInfo from './Components/PokemonInfo';
import PokemonInfoString from './Components/PokemonInfoString copy';
import TypeFilter from './Components/TypeFilter';




export const Routes = () => {
    return(
        <Switch>
            <Route path='/' component={App} exact/>
            <Route path='/pokemoninfo/:pokemonIndex' component={PokemonInfo} exact/>
            <Route path='/pokemoninfoString/:pokemonIndex' component={PokemonInfoString} exact/>
            <Route path='/type/:pokemontype' component={TypeFilter} exact/>


            

        </Switch>
    );
}
