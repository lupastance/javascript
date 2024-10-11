console.log('Hola calculadora');

const screen = document.querySelector('#screen');
const operatorList = document.querySelectorAll('.operator');
const numberList = document.querySelectorAll('.number');
const operatorC = document.querySelector('#operator-c');

operatorList.forEach(operator => {
    if(
        !isNaN(operator.innerText) ||
        operator.innerText === '+' ||
        operator.innerText === '-' ||
        operator.innerText === '*' ||
        operator.innerText === '/' ||
        operator.innerText === '.' 
    ) {
        operator.addEventListener('click', () => {
            // console.log(operator.innerText);
            screen.value += operator.innerText;
        })
    };

    if((operator.innerText === '=')) {
        operator.addEventListener('click', () => {
            getResult();
        });
    }

});

operatorC.addEventListener('click', () => {
    screen.value = null;
})

function getResult() {
    screen.value = eval(screen.value);
}
