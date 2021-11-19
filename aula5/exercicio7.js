/*
const meuArray = [];
let valor = 0;

while (valor < 5) {
  meuArray.push(valor);
  valor++;
}
No exemplo de código acima, o `while`será executado 5 vezes e acrescentará os 
números de 0 a 4 a `meuArray`. Vamos tentar fazer com que um loop `while` funcione
 enviando valores para um array. 

Adicione os números de 5 a 0 (inclusive) em ordem decrescente para
 `meuArray` usar um `while`loop e imprima-o no final.
const meuArray = [];
*/



const meuArray = [5, 4, 3, 2, 1, 0];
let valor = 0;

while (valor < 5) {
  meuArray.push(valor);
  valor++;
}

console.log(meuArray);