// -- Estrutura de controle (loops) --
// Serve para executar um código um determinado número de vezes
// ou enquanto uma condição for atendida

let array = ["maçã", "banana", "laranja", "melancia"];

console.log("-- imprimindo manualmente cada item --\n");
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log("\n");
console.log("-------------\n");

console.log("-- exemplo de FOR básico --\n");
// variável ; condição; contador 
for (let i = 0; i <= 4; i++) {
  console.log(`Número: ${i}`)
}
console.log("\n");
console.log("-------------\n");

// Agora vamos usar o for, para percorrer as frutas

array = ["maçã", "banana", "laranja", "melancia", "abacate", "pera"];
console.log("-- imprimindo itens usando FOR --\n");

// Exemplo com alvo fixo p/ contador

// variável ; condição; contador
for (let i = 0; i <= 3; i++) {
  console.log(array[i])
}
console.log("\n");
console.log("-------------\n");

// Exemplo com alvo móvel p/ contador
console.log("-- imprimindo itens usando FOR, base no tamanho do vetor --\n");

for (let i = 0; i < array.length; i++) {
  console.log("Fruta: " + array[i])
}
console.log("\n");
console.log("-------------\n");


// Exemplo Usando FOR EACH
console.log("-- Usando FOR EACH --\n");

frutinhas = ["maçã", "banana", "laranja", "melancia", "abacate", "pera"];
frutinhas.forEach(frutinha => {
  console.log("Fruta: " + frutinha)
});
console.log("\n");
console.log("-------------\n");