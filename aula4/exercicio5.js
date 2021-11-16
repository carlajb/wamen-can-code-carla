/*
Delete a propriedade patas do objeto meuCachorro
 e imprima-o em seguida. Você pode usar a notação 
 de ponto ou colchete.*/


const meuCachorro = {
    "nome": "Zezin",
    "patas": 4,
    "caudas": 1,
    "principalAmigo": "eu"
  };

  //delete meuCachorro.patas;
delete meuCachorro["patas"];
  console.log(meuCachorro);