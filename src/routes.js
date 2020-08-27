import React from 'react';
import App from './App';
import {Switch,Route} from 'react-router-dom';
import PokemonInfo from './Components/PokemonInfo';

export const Routes = () => {
    return(
        <Switch>
            <Route path='/' component={App} exact/>
            <Route path='/pokemoninfo/:pokemonIndex' component={PokemonInfo} exact/>

        </Switch>
    );
}
