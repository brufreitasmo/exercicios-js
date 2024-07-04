var input = require('fs').readFileSync('stdin', 'utf8');
var frase= input.split('');

const vogais = ["A", "E", "I", "O", "U"];

var contador = 0;

frase.forEach((letra) => {
    if (vogais.includes(letra.toUpperCase())) {
        contador++;
    }
})

console.log(contador);