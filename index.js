baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

fetch(`${baseUrl}`)
    .then(resp => resp.json())
    .then(arr => arr.forEach(data => renderPokemon))

function renderPokemon(data) {
  const pokemonSelection = document.getElementById('pokemon-bar')
    pokemonSelection = 
}