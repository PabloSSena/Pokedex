import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
    render(){
        return(
            <Link to={"/"}>
                <header>
                    <h1>Pokédex</h1>
                </header>
            </Link>
        );
    }
}
