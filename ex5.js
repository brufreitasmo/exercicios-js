var input = require('fs').readFileSync('stdin', 'utf8');


const tam = 13;
const simbolo = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const valor = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];


    let romano = '';
    for (let i = 0; i < tam; i++) {
        while (input >= valor[i]) {
            romano += simbolo[i];
            input -= valor[i];
        }
    }
    
console.log(romano)
