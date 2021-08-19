import React, { Component } from 'react';
import Header from './Header.js';
import SearchOptions from './SearchOptions.js';
import PokeList from './PokeList.js';
import Paging from './Paging.js';
import getPokemon from './PokemonApi.js'
import request from 'superagent';

//stylesheet
import './App.css';


export default class App extends Component {
  //setting empty state
  state = { pokeData: [] }

  async loadPokemon() {
    const response = await getPokemon();
    const pokeData = response.body.results;
    const totalResults = response.body.count;
    this.setState({
      pokeData: pokeData,
      totalResults: totalResults,
    });
  }

  async componentDidMount() {
    await this.loadPokemon();
    window.addEventListener('hashchange', async () => {
      await this.loadPokemon();
    })
  }


render() {

  const { pokeData, totalResults } = this.state;

  return (

    <div>

      <Header />

      <SearchOptions />

      <Paging totalResults={totalResults} />

      <PokeList pokemon={pokeData} />

    </div>
  );
}
}
