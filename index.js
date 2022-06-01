const getPokemon = () => {
    fetch('https://graphqlpokemon.favware.tech/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `
            {
              getPokemon(pokemon: dragonite) {
                  sprite
                  num
                  species
                  color
              }
            }
          `
        })
    })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            renderPokemonDetail(json)
        });
}
// const getCharacter = () => {
//     fetch("http://localhost:3000/characters/")
//     .then(res => res.json())
//     .then(arr => arr.forEach(character => renderCharacterBar(character)))
// }

const renderPokemonDetail = (pokemon) => {
    let pokemonContainer = document.getElementById("pokemon-bar")
    let pokemonPicture = document.createElement('img');

    pokemonPicture.src = pokemon.data.getPokemon.sprite
    // pokemonName.addEventListener('click', () => renderPokemonDetail(pokemon));
    pokemonContainer.append(pokemonPicture);
}

getPokemon();