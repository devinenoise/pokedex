import React, { Component } from "react";
import "./App.css";

export default class PokeItem extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="creature">{this.props.pokemon.pokemon}</h3>
                <p className="type"><strong>Type</strong>: {this.props.pokemon.type_1} / {this.props.pokemon.type_2}</p>
                <p className="attributes"><strong>Height</strong>: {this.props.pokemon.height}"</p>
                <p className="attributes"><strong>Weight</strong>: {this.props.pokemon.weight} lbs</p>
                <p className="attributes"><strong>HP</strong>: {this.props.pokemon.hp}</p>
                <img
                    alt={this.props.pokemon.url_image}
                    src={this.props.pokemon.url_image} />
            </div>
        )
    }
}
