console.log(`Trabalhando com listas`);

//Lista inviavel quando se tem o mesmo sentido exemplo cidades:
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log("Destinos possiveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro);

//CONSTRUIR LISTA
//uma lista grande assim ficará mais dificil pra dar manutenção, para isso vamos usar o array abaixo
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

//ADICIONAR 
//após a lista construida, para adicionar novas cidades na lista:
listaDeDestinos.push(`Curitiba`); 
console.log("Destinos possiveis:");
console.log(listaDeDestinos);

//REMOVER 
//como remover uma cidade da lista:
// 1 posição e apenas 1 elemento da lista, ou seja delete `São Paulo`(a contagem da lista começa em 0,1,2..)
listaDeDestinos.splice(1,1);
console.log("Destinos possiveis:"); 
console.log(listaDeDestinos);

//EXIBIR SÓ OQ EU QUERO
//sabendo das posições das cidades dentro da lista, indicar somente Rio de Janeiro e Salvador:
console.log("Destinos escolhido:"); 
console.log(listaDeDestinos[1], listaDeDestinos[0]);


//documentação arrays:
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array