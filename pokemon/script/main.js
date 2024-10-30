import pokedex from '../data/pokedex.json' with {type: 'json'};

const pokemonFilterName = document.querySelector('#pokemon-filter-name');
const buttonFilterPokemon = document.querySelector('#button-filter-pokemon');
var names = getNames();

function getNames(){
    let names = [];

    pokedex.forEach(pokeName => {
        names.push(pokeName.nombre);
    });

    return names;
}

function listPokemons(){
    const pokemonListado = document.querySelector('#pokemon-listado');
    
    names.forEach(pokemonName => {
        const pokemonListadoElement = document.createElement('li');
        pokemonListadoElement.innerText = pokemonName;

        pokemonListadoElement.addEventListener('click', () => {
            getPokemonByFilter(pokemonListadoElement.innerText);
        })

        pokemonListado.appendChild(pokemonListadoElement);
    });

}

function getPokemonByFilter(name){
    // Aplicamos el método filter para filtrar los elementos por la clave 'nombre'
    const pokeInfo = pokedex.filter(pokemon => pokemon.nombre === name)[0];

    const avatar = document.querySelector('#pokemon-avatar');
    const pokemonName = document.querySelector('#pokemon-name');
    const pokemonHP = document.querySelector('#pokemon-hp');
    const pokemonTipo = document.querySelector('#pokemon-tipo');
    const pokemonNivel = document.querySelector('#pokemon-nivel');
    const pokemonHabilidadPrincipal = document.querySelector('#pokemon-habilidad-principal');

    // Cambiamos la imagen en función del nombre del pokemon
    avatar.src = `img/${name}.png`;

    // Ponemos el nombre del pokemon en el atributo 'alt' de la imagen
    avatar.alt = name;
    
    // Ponemos el nombre del Pokemon
    pokemonName.innerText = name;

    // Ponemos el 'HP' (la vida) del pokemon
    pokemonHP.innerText += pokeInfo.HP;

    // Ponemos de qué tipo(s) es el pokemon
    pokemonTipo.innerText += pokeInfo.tipo;

    // Establecemos el nivel que tiene el pokemon
    pokemonNivel.innerText += pokeInfo.nivel_base;

    // Ponemos la habilidad principal del pokemon
    pokemonHabilidadPrincipal.innerText += pokeInfo.habilidad_principal;
}

listPokemons();
getPokemonByFilter('Pikachu');


buttonFilterPokemon.addEventListener('click', () => {
    if(pokemonFilterName.value) {
        getPokemonByFilter(pokemonFilterName.value)
    }

    else {
        alert('Por favor, introduce un nombre de Pokemon para buscar');
    }
})