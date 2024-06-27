var input = require('fs').readFileSync('stdin', 'utf8');

function converterCaracterAInteiro(caracter) {
    switch (caracter) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}

function converterRomanoAnteiro(romano) {
    
    let numero = converterCaracterAInteiro(romano.charAt(0));
    let anterior;
    let atual;

    for (let i = 1; i < romano.length; ++i) {
        atual = converterCaracterAInteiro(romano.charAt(i));
        anterior = converterCaracterAInteiro(romano.charAt(i - 1));

        if (atual <= anterior) {
            numero += atual;
        } else {
            numero = numero - anterior * 2 + atual;
        }
    }

    return numero;
}

console.log(converterRomanoAnteiro(input));
