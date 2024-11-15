import pokemons from './data.json' with { type: 'json' };

console.log('JS Cargado');
console.log(pokemons);

localStorage.setItem("lista-pokemons", JSON.stringify(pokemons))



const nombreUsuario = document.querySelector('#nombre-usuario');
const botonEnviar = document.querySelector('#boton-enviar');

botonEnviar.addEventListener('click', () => {
    localStorage.setItem("nombre", nombreUsuario.value);
})
