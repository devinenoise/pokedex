const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?';

export default async function getPokemon() {
    // get rid of the first character of the hash (#)
    let queryString = window.location.hash.slice(1);
    // build a url out of the url and querystring
    const url = `${URL}${queryString}`;
    // send that url along to the fetch
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === 'False') {
        return {
            Search: [],
            totalResults: 0
        };
    }
    return data;
}