var input = require('fs').readFileSync('stdin', 'utf8');
var arr = input.split(',');

var repeatedArr = [];

arr.forEach(function(elemento, i) {
    if(arr.indexOf(elemento) !== i && !repeatedArr.includes(elemento)) {
        repeatedArr.push(elemento);
    }
});

console.log(repeatedArr.length);