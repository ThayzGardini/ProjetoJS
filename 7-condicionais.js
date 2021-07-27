console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

//Adicionando mais uma condição, comprador deve ser maior de idade para comprar,
//ou se for menor deve estar acompanhado de um adulto
//criamos uma variavel de idade e já abribuimos 15 anos para ela
//criamos uma variavel de acompanhante true
const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possiveis:");
console.log(listaDeDestinos);

//Em seguida faremos a condição para analisar se a idade do comprador pode visualizar as cidades:
// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade");
// } else if(estaAcompanhada){
//     console.log("Comprador menor de idade, porem acompanhada de um adulto");
// } else {
//     console.log("Comprador menor de idade, não é possivel comprar passagens");
// }

//Melhorando a mesma condição acima e reduzindo o codigo (OTIMIZAÇÃO)
//Usando a condição OU idade OU (||) esta acompanhada pode comprar a passagem para a cidade:
if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log(
    "Comprador maior de idade ou acompanhado de um adulto, pode comprar passagem"
  );
} else {
  console.log(
    "Comprador menor de idade e sem acompanhamento de um adulto não é possivel comprar passagens"
  );
}

//Usando a condição E AND &&
console.log("Validação antes de embarcar: \n\n"); // o '\n\n' pula duas linhas
if (idadeComprador >= 18 && temPassagemComprada) { // para indicar 'e' ou 'and' utiliza '&&'
  console.log("Boa viagem");
} else {
  console.log("Você é menor de idade e não tem passagem, não poderá embarcar");
}


