console.log("mi primer mensaje");
// alert("mensaje de alerta");

function miBoton(){
    console.warn("Has pinchado en el botón");
}

function noClick() {
    console.log("NO CLICK!!!!");
}

function textRed(elemento) {
    elemento.classList.add('text-red');
}

document.addEventListener("DOMContentLoaded", () => {
    let buttonNoClick = document.getElementById("no-click");
    buttonNoClick.addEventListener('click', noClick);

    let misClases = document.getElementsByClassName("sergio");
    console.log(misClases);

    misClases[2].classList.add('negrita');
    misClases[4].classList.remove('sergio');

    for (let i = 0; i < misClases.length; i++) {
        misClases[i].classList.add("hola");
    }

    let red = document.getElementById("red");
    red.addEventListener('click', textRed(misClases[2]));
    misClases[1].style.color = 'green';
})