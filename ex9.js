var input = require('fs').readFileSync('stdin', 'utf8');
var words = input.split('\n');

let word1 = words[0];
let word2 = words[1];

function checkWords(word1, word2) {

    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    
    let lettersWord1 = word1.split('');
    
    for (let letter of word2) {
        let index = lettersWord1.indexOf(letter);
        if (index === -1) {
            return false; 
        } else {
            lettersWord1.splice(index, 1);
        }
    }
    
    return true;
}

console.log(checkWords(word1, word2));
