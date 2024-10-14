console.log('Hola calculadora');

const screen = document.querySelector('#screen');
const operatorList = document.querySelectorAll('.operator');
const numberList = document.querySelectorAll('.number');
const operatorC = document.querySelector('#operator-c');

numberList.forEach(number => {
    number.addEventListener('click', () => {
        screen.value += number.innerText;
    })

});

operatorList.forEach(operator => {
    operator.addEventListener('click', () => {
        let operatorValue = operator.innerText;

        if(operatorValue !== '='){
            screen.value += operatorValue;
        }

        if(operatorValue === '=') {
            getResult();
        }
    })
});

operatorC.addEventListener('click', () => {
    screen.value = null;
})

function getResult() {
    let result = eval(screen.value);

    screen.value = result;
}
