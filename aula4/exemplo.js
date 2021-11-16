const meuPrimeiroObjeto = {};

const meuCarro = {
    modelo: "prisma",
    cor: "black",
    ano: 2020,
    carroNovo: true
};

console.log(meuCarro);
console.log(meuCarro.modelo);
console.log("meu carro e novo? ",meuCarro.carroNovo);
console.log(meuCarro["cor"]);

const modeloCarro = "modelo";
console.log(meuCarro[modeloCarro]);