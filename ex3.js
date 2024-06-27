var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n').map(Number);

//DECRESCENTE
const numerosOrdenados = lines.sort((x, y) => y - x);

console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);

