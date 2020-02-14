// const URL = "https://alchemy-pokedex.herokuapp.com/api/pokedex";

export async function getPokemon() {
  let queryString = window.location.hash.slice(1);
  const url = `${URL}${queryString}`;

  // send that url along to the fetch
  const response = await fetch(url);
  const data = await response.json();

  // this api fails if no search :(
  if (data.Response === "False") {
    return {
      Search: [],
      totalResults: 0
    };
  }

  return data;
}