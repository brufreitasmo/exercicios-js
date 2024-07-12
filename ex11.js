var input = require('fs').readFileSync('stdin', 'utf8');

function numToWords(num) {
    if (num === 0) return 'zero';
    if (num > 1000000) return 'Number out of range';
    
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const thousands = ["", "thousand", "million"];

    // Função para converter centenas
    function convertHundreds(number) {
        let result = '';

        if (number > 99) {
            result += ones[Math.floor(number / 100)] + ' hundred ';
            number %= 100;
        }

        if (number >= 11 && number <= 19) {
            result += teens[number - 10] + ' ';
        } else {
            result += tens[Math.floor(number / 10)] + ' ';
            number %= 10;
            result += ones[number] + ' ';
        }

        return result.trim();
    }

    // Função principal para converter números
    function convert(number) {
        if (number === 0) return '';

        let result = '';
        let thousandCounter = 0;

        while (number > 0) {
            if (number % 1000 !== 0) {
                result = convertHundreds(number % 1000) + ' ' + thousands[thousandCounter] + ' ' + result;
            }
            number = Math.floor(number / 1000);
            thousandCounter++;
        }

        return result.trim();
    }

    // Chama a função de conversão e retorna o resultado
    return convert(num);

}

console.log(numToWords(input));
