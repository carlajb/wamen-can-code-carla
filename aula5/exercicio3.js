/*
Podemos passar valores para uma função através de argumentos,
 como vimos no exercício anterior. Você pode usar uma instrução 
 return para enviar um valor de volta de uma função, ou seja, retorna-lo. Exemplo:
 */

 function somaTres(numero) {
    return numero + 3;
  }
  
  const resultado = somaTres(5);
  //somaTres(10);
  console.log(resultado);

  /*
  Crie uma função multiplicaPorCinco que aceite
   um argumento, multiplique-o por 5e retorne o novo valor. 
   */

  function multiplicaPorCinco(num){
      return num * 5;
  }
const resultadoMultiploDe5 = multiplicaPorCinco(10);
console.log(resultadoMultiploDe5);