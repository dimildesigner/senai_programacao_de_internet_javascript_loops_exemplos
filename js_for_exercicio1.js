// EXERCICIOS FOR
// 1- Você foi solicitado a criar uma aplicação que exibe 
// a tabuada de um número fornecido pelo usuário. 
// O programa deve solicitar um número e exibir a tabuada 
// desse número de 1 a 10 utilizando um loop for.
// Como você faria isso de maneira clara e eficiente? 


const prompt = require('prompt-sync')()

console.log("\n-**** Tabuada ****-\n")
// Usamos Number() ou parseInt() pois tabuada geralmente é com números inteiros
let numero = Number(prompt('Digite um número para ver a tabuada: '));

console.log("\n" + `A tabuada de ${numero} é: `)

// 1. Começamos o i em 1
// 2. Vamos até o 10
// 3. Somamos +1 a cada volta (i++)
for (let i = 1; i <= 10; i++) {
  // Criamos uma variável para o resultado para o código ficar mais legível
  let resultado = numero * i;
  
  // Usamos Template Strings (com crase) para exibir bonitinho: "5 x 1 = 5"
  console.log(`${numero} x ${i} = ${resultado}`);
}

console.log("\n-**** Fim da operação ****-\n")