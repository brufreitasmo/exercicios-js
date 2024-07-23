var input = require('fs').readFileSync('stdin', 'utf8');
var array = input.split('\n');

array = array.reverse();

  for (let l = 0; l < array.length; l++) {
    console.log(`N[${l}] = ${array[l]}`);
}

