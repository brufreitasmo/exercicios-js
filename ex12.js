var input = require('fs').readFileSync('stdin', 'utf8');
const numeros = input.trim().split('\n').map(Number);

const par = new Array(5);
const impar = new Array(5);
let contpar = 0;
let contimpar = 0;


numeros.forEach(x => {
    if (x % 2 === 0) {
        par[contpar] = x;
        if (contpar === 4) {
            console.log(par.map((num, index) => `par[${index}] = ${num}`).join('\n'));
            contpar = -1;
        }
        contpar++;
    } else {
        impar[contimpar] = x;
        if (contimpar === 4) {
            console.log(impar.map((num, index) => `impar[${index}] = ${num}`).join('\n'));
            contimpar = -1;
        }
        contimpar++;
    }
});

// Imprimir o restante dos números nos arrays
for (let x = 0; x < contimpar; x++) {
    console.log(`impar[${x}] = ${impar[x]}`);
}
for (let x = 0; x < contpar; x++) {
    console.log(`par[${x}] = ${par[x]}`);
}


// Neste problema você deverá ler 15 valores colocá-los em 2 vetores conforme estes valores forem pares ou ímpares. Só que o tamanho de cada um dos dois vetores é de 5 posições. Então, cada vez que um dos dois vetores encher, você deverá imprimir todo o vetor e utilizá-lo novamente para os próximos números que forem lidos. Terminada a leitura, deve-se imprimir o conteúdo que restou em cada um dos dois vetores, imprimindo primeiro os valores do vetor impar. Cada vetor pode ser preenchido tantas vezes quantas for necessário.