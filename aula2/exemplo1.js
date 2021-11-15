/* case sensitive (mauiscula e minuscula);
VARIAVEIS = (var; let; const) contante nao breescreve, const uma variavel que nao muda.
Let sendo criada dentro de uma funcao, nao pode ser chamada fora dela. 
*/

var nome = "Carla";

var Nome = "Janaina";

var NOME = "Braga";

console.log(nome);
console.log(Nome);
console.log(NOME);

var cidade;

cidade = 'Sao Paulo';
console.log(cidade);
cidade = 'Rio de janeiro';
console.log(cidade);

var estado = "SP";

function printEstado(){
    let cidade = "Sao Paulo";
    let estado = "RJ";
    console.log("Ele considera o estado criado com o let dentro de uma funcao e desconsidera o estado criado com a  const fora da funcao : ", estado, cidade);
}

printEstado();

console.log("mas quando chamada a const fora da funcao ele reconhece" , estado);


/*
string
number
percent
object
undefined
symbol
*/
