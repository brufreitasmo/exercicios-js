var input = require('fs').readFileSync('stdin', 'utf8');
var array = input.split('\n').map(num => num.trim());

function numPrime(num) {
    if (num <= 1) return false;
    if (num == 2) return true;
    if (num % 2 == 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

array = array.filter(numPrime);
if (array.length === 0) {
    return "não há número primo";
 } else {
    console.log(array.join(", "));
 }





