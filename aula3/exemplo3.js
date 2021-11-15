var soma = 20 + 5;
var subtracao = 200 - 33;
var multiplicacao = 11 * 17;
var divisao = 66 / 3;
var restoDeDivisao =20 % 7; //quando sobrar resto da divisao

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(restoDeDivisao);

var total = 300 - subtracao;
console.log(total);

if (total >500){
    console.log("Total e maior que 500");
}else{
    console.log("total nao e maior que 500");   
}

// outra forma de utilizar e o ternario
total > 500 ? console.log("Total e maior que 500"): console.log("total nao e maior que 500");

//else if

if (total >500){
    console.log("Total e maior que 500");
}else if(total > 400){
    console.log("total e maior que 400");
}else{
    console.log("total nao e maior que 500 e tbm nao e maior que 400");
}

/*
operadores de comparacao
== tem o mesmo valo 
=== te o mesmo valoe e tbm e o mesmo tipo
!= tem valor diferente 
!== tem valor ou tipo diferente 
> maior que 
< menor que 
>= maior igual que
<= menor igual que 
*/
var primeiroValor = 3;
var segundoValor = "3";

console.log(primeiroValor == segundoValor);
console.log(primeiroValor === segundoValor);
console.log(typeof primeiroValor);
console.log(typeof segundoValor);

console.log(primeiroValor != segundoValor);
console.log(primeiroValor !== segundoValor);

console.log(primeiroValor > segundoValor);
console.log(primeiroValor < segundoValor);

console.log(primeiroValor >= segundoValor);
console.log(primeiroValor <= segundoValor);
