const modalCookies = document.querySelector('#modal-cookies');
const aceptarCookies = document.querySelector('#aceptar-cookies');
const rechazarCookies = document.querySelector('#rechazar-cookies');

function cerrarCookies(element) {
    element.addEventListener('click', () => {
        modalCookies.classList.toggle('hide');
    })
}

cerrarCookies(aceptarCookies);
cerrarCookies(rechazarCookies);

document.addEventListener('DOMContentLoaded', () =>   {
    setTimeout(() => {
        modalCookies.classList.remove('hide');
    }, 1500);
});