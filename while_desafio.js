// Desafio: Aprimore o programa de adivinhações:
// 1. Quando errar, dizer se o número secreto está acima ou abaixo do palpite;
// 2. Dar somente 5 tentativas ao usuário. Se ele errar 5 vezes, termine o programa.

// Exemplo Usando WHILE
console.log("-- Número Secreto --\n");
console.log(">> O desafio <<\n");
console.log("** Regras: Números de 1 a 10 e você tem 5 tentativas\n");

const prompt = require('prompt-sync')()

let numeroSecreto = 6
let tentativas = 2 //CONTADOR DE TENTATIVAS

console.log("TENTATIVA: 1")

let palpite = Number(prompt("Adivinhe o número secreto: "));
if(palpite == numeroSecreto){
    console.log("\nVocê acertou! Parabéns! 🎉🎉🎉");
    console.log(">>>>>>>>>\n");
    console.log("\n>>>> Fim do Jogo <<<<\n");
}

while(palpite != numeroSecreto){

    console.log("\n>> Você errou‼");
    
    if(palpite < numeroSecreto){
        console.log(">> O número é maior. ⬆");
        console.log(">>>>>>>>>\n");
    }

    else{
        console.log(">> O número é menor. ⬇");
        console.log(">>>>>>>>>\n");
    }

    console.log(">> Nova Tentativa\n");
    console.log("TENTATIVA: " + tentativas)
    palpite = Number(prompt("Adivinhe o número secreto: "));

    tentativas++
    if (tentativas === 6) {
        console.log("\n>> Acabaram suas tentativas!");
        console.log(">>>>>>>>>\n");
        console.log("\n>>>> Fim do Jogo <<<<\n");
        break
    }

    if(palpite == numeroSecreto){
        console.log("\nVocê acertou! Parabéns! 🎉🎉🎉");
        console.log(">>>>>>>>>\n");
        console.log("\n>>>> Fim do Jogo <<<<\n");
        break
    }
}

console.log("-------------\n");