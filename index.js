baseUrl = 'http://localhost:3000/pokemon'

fetch(`${baseUrl}`)
    .then(response => response.json())
    .then(data => {
        renderPokemon(data[1])
        renderPokemonLists(data)
    })

    //get first Pokemon details
function renderPokemon(pokemon) {
    const pokemonName = document.getElementById('pokemon-name')
        pokemonName.textContent = pokemon.name
    const pokemonHp = document.getElementById('pokemon-hp')
        pokemonHp.textContent = pokemon.hp
    const pokemonImage = document.getElementById('pokemon-image')
         pokemonImage.src = pokemon.sprites.front        
}   

function renderPokemonLists(pokemon) {
    // console.log(pokemon[0])
    pokemon.forEach(object => {
        const pokemonPic = document.createElement('img')
            pokemonPic.src = object.sprites.front
         const grabDiv = document.getElementById('pokemon-pic')
         pokemonPic.addEventListener('click', () => renderPokemon(object))
         
        grabDiv.append(pokemonPic)
    } 
    )
}