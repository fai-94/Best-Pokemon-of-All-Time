baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

fetch(`${baseUrl}`)
    .then(response => response.json())
    .then(data => {
        renderPokemon(data[0])
        renderPokemonLists(data)
    })

// function renderPokemon(data) {
//   const pokemonSelection = document.getElementById('')
//     // pokemonSelection = 
// }