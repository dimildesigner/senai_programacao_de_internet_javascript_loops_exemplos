// EXERCICIO FOR
// 1- Você foi solicitado a criar uma aplicação que exibe 
// a tabuada de um número fornecido pelo usuário. 
// O programa deve solicitar um número e exibir a tabuada 
// desse número de 1 a 10 utilizando um loop for.
// Como você faria isso de maneira clara e eficiente? 


const prompt = require('prompt-sync')()

console.log("\n-**** Tabuada ****-\n")

let numero = Number(prompt('Digite um número para ver a tabuada: '));

console.log("\n" + `A tabuada de ${numero} é: `)

for (let i = 1; i <= 10; i++) {  
  let resultado = numero * i;
  
  console.log(`${numero} x ${i} = ${resultado}`);
}

console.log("\n-**** Fim da operação ****-\n")