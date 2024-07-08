
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const array = lines[1].trim().split(",");
const k = parseInt(lines[2]);
const difference = parseInt(array.length) - k;

const newArr = array.slice(-k);
newArr.push(...array.splice(0, difference));


console.log(newArr.join(", "));
