import React, { Component } from "react";
import PokeItem from './PokeItem.js';
import './App.css';

export default class PokeList extends Component {

    render() {

        const pokeData = this.props.pokemon;
        const pokeList = pokeData.map((item, index) => {
            return <PokeItem pokemon={item} key={item.description} />
        })
        return (
            <div>

                <ul>

                    {pokeList}

                </ul>
            </div>
        )
    }
}