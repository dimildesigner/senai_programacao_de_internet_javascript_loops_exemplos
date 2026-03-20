// WHILE IRÁ RODAR O CÓDIGO, ENQUANTO A CONDIÇÃO FOR VERDADEIRA

// Exemplo Usando WHILE
console.log("-- Número Secreto --\n");

const prompt = require('prompt-sync')()

let numeroSecreto = "8"

let palpite = prompt("Adivinhe o número secreto: ");
if(palpite == numeroSecreto){
    console.log("\nParabéns! Você acertou!");
}

while(palpite != numeroSecreto){
    console.log("\nVocê errou!\n");
    console.log(">>>>>>>>>\n");
    console.log(">> Nova tentativa!");
    palpite = prompt("Continue tentando: ");

    if(palpite == numeroSecreto){
        console.log("\nParabéns!\n");
        console.log(">> Você acertou!");
        console.log(">>>>>>>>>\n");
        break
    }
}

console.log("-------------\n");