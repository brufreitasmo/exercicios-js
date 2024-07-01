var input = require('fs').readFileSync('stdin', 'utf8');
var arr = input.split(' ');

console.log(arr.reverse().join("."));