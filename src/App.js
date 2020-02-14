import React, { Component } from 'react';
import Header from './Header.js';
import SearchOptions from './SearchOptions.js';
import PokeList from './PokeList.js';
import Paging from './Paging.js';
import getPokemon from './PokemonApi.js'

//stylesheet
import './App.css';


export default class App extends Component {
  //setting empty state
  state = { pokeData: [] }

  async loadPokemon() {
    const response = await getPokemon();
    const pokeData = response.results;
    const totalResults = response.count;
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

  // updating the url and displaying the search results in the url
// async searchLoad() {
//   const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
//   const searchQuery = window.location.hash.slice(1);
//   const searchToLoad = `${URL}?${searchQuery}`;
//   this.setState({ pokeData: searchQuery })

// }


// fetching the api and setting state
// async componentDidMount() {
//   const pokemonGang = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')

//   this.setState({ pokeData: pokemonGang.body.results })

//   window.addEventListener('hashchange', () => {
//     this.searchLoad()
//   })

// }

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
