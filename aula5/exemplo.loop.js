// for ([bloco de inicializacao]; [bloco de condicional]; [expressao final incrementar ou decrementar])
// for (let contador = 1; contador <=5; contador++){
//     console.log(contador);

//     if(contador === 4){
//         break;
//     }
// }

// const meuArray =[1,2,3,4,5];
// for(let indice =0; indice < meuArray.length; indice++){
//     console.log(meuArray[indice])
// }

// for(let contador = 1; contador <= 5; contador++){
//     console.log("Amanda");
// }

// let contador =1;
// while(contador <=5){
//     console.log("Carla");
//     contador++;
// }

// para nao deixar nosso let solto como no exemplo acima para que nao usem 
// esta variavel em algum outro bloco podemos coloca la em uma funcao 
/*
function repetidorWile(){
    let contador =1;
while(contador <=5){
    console.log("Carla");
    contador++;
}
}
repetidorWile();
*/

// let contador = 5;
// do{
//     console.log("Carla");
//     contador++;
// }while(contador <= 1 )

//forEach

// const meuArray = ["Meu", "nome", "e", "Carla" ];

// meuArray.forEach(function(item){
//     console.log(item)
// });

// map => retorna um novo array

// const meuArray = [1,2,3,4,5,6];

// const arrayAtualizado = meuArray.map(function(param){
//     return "Meu valo e: " + param;
// });

// console.log(arrayAtualizado);

// mudando valor do proprio array com increment 

const meuArray =[1,2,3,4,6,7,8,9,10];

for(let indice = 0; indice < meuArray.length; indice ++) {
    meuArray[indice] = meuArray[indice] +5;
}
console.log(meuArray);