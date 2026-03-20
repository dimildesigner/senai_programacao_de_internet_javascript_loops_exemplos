// Desafio: Aprimore o programa de adivinhações:
// 1. Quando errar, dizer se o número secreto está acima ou abaixo do palpite;
// 2. Dar somente 5 tentativas ao usuário. Se ele errar 5 vezes, termine o programa.

// Exemplo Usando WHILE
console.log("-- Número Secreto --\n");
console.log(">> O desafio <<\n");
console.log("** Regras: Números de 1 a 10 e você tem 5 tentativas\n");

const prompt = require('prompt-sync')()

let numeroSecreto = "6"

let palpite = prompt("Adivinhe o número secreto: ");
if(palpite == numeroSecreto){
    console.log("\nParabéns! Você acertou! 🎉🎉🎉");
}

while(palpite != numeroSecreto){
    
    if(palpite < numeroSecreto){
        console.log("\nVocê errou‼ O número é maior. ⬆");
        console.log(">>>>>>>>>\n");
        palpite = prompt(">> Continue tentando: ");
    }

    if(palpite > numeroSecreto){
        console.log("\nVocê errou‼ O número é menor. ⬇");
        console.log(">>>>>>>>>\n");
        palpite = prompt(">> Continue tentando: ");
    }

    if(palpite == numeroSecreto){
        console.log("\nParabéns! Você acertou! 🎉🎉🎉");
        console.log(">>>>>>>>>\n");
        break
    }
}

console.log("-------------\n");