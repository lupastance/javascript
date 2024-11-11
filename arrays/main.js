import data from './data.json' with { type: 'json' };

const miArray = ["pepe", "maria", "juan", "alberto", "pedro"];
const miArray2 = ["pepe", 23, 6555554, "11111", "22222", "maria", "juan", "alberto", "pedro"];
const listaElementos = document.querySelector('#lista-elementos');

listaElementos.innerText = miArray;

console.log(miArray.pop());
console.log(miArray);

miArray2.forEach(e => {
    console.log(e, !isNaN(e));
});

console.log(data);


