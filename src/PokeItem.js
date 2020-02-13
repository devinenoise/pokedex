import React, { Component } from "react";


export default class PokeItem extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="creature">Name:{this.props.pokemon.pokemon}</h3>
                <p className="attributes">Type 1: {this.props.pokemon.type_1}</p>
                <p className="attributes">Type 2: {this.props.pokemon.type_2}</p>
                <p className="attributes">Height: {this.props.pokemon.height}</p>
                <p className="attributes">Weight: {this.props.pokemon.weight}</p>
                <p className="description">HP: {this.props.pokemon.hp}</p>
                <img
                    alt={this.props.pokemon.url_image}
                    src={this.props.pokemon.url_image} />
            </div>
        )
    }
}
