import { byId } from '/script/functions.js';

const formEnviar = document.getElementById('enviar');

formEnviar.addEventListener('click', () => {
    byId('name');
    byId('email');
    byId('message');
});