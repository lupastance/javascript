import pokedex from '../data/pokedex.json' with { type: 'json' }

let pokeTipos = [];
const pokemonTipos = document.querySelector('#pokemon-tipos');

function getPokemonTipos(){
    pokedex.forEach(pokemon => {
        pokemon.tipo.forEach(tipo => {
            pokeTipos.push(tipo)
        });
    });

    pokeTipos = new Set(pokeTipos)

    pokeTipos.forEach(pokeTipo => {
        const tipo = document.createElement('li');
        tipo.innerText = pokeTipo;

        tipo.addEventListener('click', () => {
            // console.log(tipo.innerText);
            let ola = pokedex.filter(pokemon => pokemon.tipo.includes(tipo.innerText));
            console.log(ola);
            
        });

        pokemonTipos.appendChild(tipo)
    });
}

getPokemonTipos();