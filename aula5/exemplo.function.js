// function funcaoSimples(){
//     console.log("como chamar uma funcao simples");
// };

//funcaoSimples();

function funcaoComParam(param, param2){
    console.log(param, param2);
}

//funcaoComParam(["aqui tenho que invocar a resposta do meu parametro", {caeita:"objeto"}, "aceita numero: ",22," aceita [array]"], "e posso passar mais de um parametro por funcao");

function retornaValor(){
    return "meu valor retornado";
}
//console.log(retornaValor());

function calculaSubtracao(val1, val2){
    return val1 - val2;
}
//console.log(calculaSubtracao(10,5));

function retornaVariavel(valorDaVariavel){
    const minhaVariavael = valorDaVariavel;
    return minhaVariavael;
}   

console.log(retornaVariavel("Meu Primeiro retorno com variavel"));     

function retornaCondicionais(valor){
    if (valor > 200){
        return "valor maior que 200";
    } else {
        return "valor menor que 200";
    }
}
console.log(retornaCondicionais(100));

function retornoCondicionalTernario(valor){
    return valor > 200 ? "Valor maio que 200" : "valor menor que 200";
}
console.log(retornoCondicionalTernario(300));

const resultadoCondicional = retornoCondicionalTernario(400);
console.log(resultadoCondicional);

//aroow function

function funcaoSimples(){
    console.log("como chamar uma funcao simples");
};

const nomeDaMinhaArrowFunction = () => {
    console.log("Minha primeira Arrow Function");
}

nomeDaMinhaArrowFunction();

const retornoCondicionalTernario2 = (valor) => valor > 200 ? "valor maior que 200" : "valor menor que 200";

const resultado2 = retornoCondicionalTernario2(12);
console.log(resultado2);