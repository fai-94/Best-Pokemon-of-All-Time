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
        pokemonName.textContent = pokemon.name.toUpperCase()
    const pokemonHp = document.getElementById('pokemon-hp')
        pokemonHp.textContent = `${pokemon.hp} HP`
    const pokemonImage = document.getElementById('pokemon-image')
         pokemonImage.src = pokemon.sprites.front 
    const pokemonVotes = document.getElementById('total-votes') 
    pokemonVotes.textContent = 0

         //store the votes here 
         pokemonImage.setAttribute('votes', 0)
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

const likeBtn = document.querySelector('#like-button')
    likeBtn.addEventListener('click', () => totalVotes.textContent = parseInt(totalVotes.textContent)+3)
const dislikeBtn = document.querySelector('#dislike-button')
    dislikeBtn.addEventListener('click', () => totalVotes.textContent = parseInt(totalVotes.textContent)-2)
    let totalVotes = document.getElementById('total-votes')

