const usuario = document.querySelector('#usuario');
const listado = document.querySelector('#listado');

const listaPokemon = localStorage.getItem('lista-pokemons');

console.log('Listado', listado);


usuario.innerText += ' ' + localStorage.getItem("nombre");

listado.innerText = listaPokemon

console.log(listaPokemon);

const listaPokemonsParseada = JSON.parse(listaPokemon);

console.log(listaPokemonsParseada);
console.log(listaPokemonsParseada[7].nombre);

listaPokemonsParseada.forEach(pokemon => {
    console.log(pokemon[0]);
});

