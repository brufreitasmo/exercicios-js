var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);

const numerosOrdenados = lines.sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);


