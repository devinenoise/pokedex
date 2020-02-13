import React, { Component } from 'react';
import Header from './Header.js';
import PokeList from './PokeList.js';
import request from 'superagent';

//stylesheet
import './App.css';


export default class App extends Component {
  state = { pokeData: [] };

  // fetching the api and setting state
  async componentDidMount() {
    const pokeData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')

    this.setState({ pokeData: pokeData.body.results })

  };

  render() {

    return (

      <div>

        <Header />

        <PokeList pokemon={this.state.pokeData} />

      </div>
    );
  }
}


