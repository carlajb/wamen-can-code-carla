// const listaTarefas = ["Varrer a sala", "Lavar Roupa", "Comprar tomates", "Enviar email"]
// for(let indice = 0; indice < listaTarefas.length; indice++) {
//     console.log(listaTarefas[indice]);
// };
/*
**Testando os conhecimentos!** Crie uma função chamada `criaPares` que receba como parâmetro o 
array `valoresNum`, nessa função deve ser executado um `for` que imprime na tela apenas os valores pares.
 Lembre-se que a sintaxe de um for é a seguinte: 

```
for ([inicialização]; [condição]; [expressão final])
 declaração
```*/

const valoresNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function criaPares(valoresNum){
    for(let contador = 0; contador < valoresNum.length; contador ++){ 
    const meuItemAtual = valoresNum[contador];
    if(meuItemAtual % 2 === 0){
        console.log(meuItemAtual);
    }
}
}
    

criaPares(valoresNum);



