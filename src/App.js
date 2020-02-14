import React, { Component } from 'react';
import Header from './Header.js';
import SearchOptions from './SearchOptions.js';
import PokeList from './PokeList.js';
import request from 'superagent';

//stylesheet
import './App.css';


export default class App extends Component {
  //setting empty state
  state = { pokeData: [] };

  //updating the url and displaying the search results in the url
  async searchLoad() {
    const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    const searchQuery = window.location.hash.slice(1);
    const searchToLoad = `${URL}?${searchQuery}`;
    const newPokemon = await request.get(searchToLoad);
    this.setState({ pokeData: newPokemon.body.results })



    const response = await fetch(searchToLoad);
    const data = await response.json();
    if (data.Response === "False") {
      return {
        Search: [],
        totalResults: 0
      };
    }

    return data;
  }


  // fetching the api and setting state
  async componentDidMount() {
    const pokemonGang = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')

    this.setState({ pokeData: pokemonGang.body.results })

    window.addEventListener('hashchange', () => {
      this.searchLoad()
    })

  }

  render() {

    return (

      <div>

        <Header />

        <SearchOptions />

        <PokeList pokemon={this.state.pokeData} />

      </div>
    );
  }
}
