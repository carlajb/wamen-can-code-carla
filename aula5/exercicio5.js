/*

function validaMaioridade(idade){ 

    if(idade > 18){
        return "Liberação autorizada";
    }else if (idade == 18){
        return "Validar documento de identidade";
    }else{
        return "ATENÇÃO: Liberação NÃO autorizada";
    }
}

console.log(validaMaioridade(17));
*/
//correcao professora 
function validaMaioridade(idade) {
    const valorMaioridade = 18;
    if (idade > valorMaioridade) {
        return "Liberação autorizada";
    } else if (idade === valorMaioridade) {
        return "Validar documento de identidade";
    } else {
        return "ATENÇÃO: Liberação NÃO autorizada";
    }
}

const resultado = validaMaioridade(35);

console.log(resultado);