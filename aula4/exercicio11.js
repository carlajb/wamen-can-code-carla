// const meuArray = [1, 4, 6];
// console.log(meuArray);
// const meuArrayAtualizado = meuArray.pop();
// console.log(meuArrayAtualizado);
// console.log(meuArray);

/*
Use a .pop()função para remover o último item meuArray e atribuir 
o valor exibido a uma nova variável removidoDoArray, imprima ambos.
*/

 const nossoArray = ["Fonseca", "Gabriela", "js"];
console.log(nossoArray);
//nossoArray.pop();
const removidoDoArray = nossoArray.pop();
console.log(removidoDoArray);
console.log(nossoArray);

/*
Você também pode remover um item no início do array usando shift()
*/

const remocaoDoPrimeiroArray = nossoArray.shift();
console.log(remocaoDoPrimeiroArray);
console.log(nossoArray);