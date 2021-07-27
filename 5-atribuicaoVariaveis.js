console.log("Trabalhando com atribuição de variáveis");


const idade = 33;  //boa pratica usar a 'const' é um tipo de variavel que não poderá ser alterada 
//em nenhum momento codigo.
let nome  = "Thayz"; //já o let é um tipo de variaval que poderá ser sobrescrito a qlqr momento, como
//na linha 18, tentar não usar muito o let, pois é mais dificil de debugar futuramente.
const sobrenome = "Gardini"

// console.log(idade + " " + nome + " " + sobrenome)
// OU abaixo que da na mesma:
console.log(idade,nome,sobrenome)
console.log(idade,nome,sobrenome)

console.log(`Meu nome é ${nome} ${sobrenome}`);//adicionando um texto antes de exibir o resultado
//`Meu nome é`, com ${} informo dentro a variavel que quero exibir

//sobrescrevendo variaveis let para mostrar resultado da junção delas
nome = nome + sobrenome;
console.log(nome);

//usando variavel para juntar duas variaveis que sejam const sem usar o let
//cria-se uma nova variavel atribuindo as variaveis q quer realizar a junção
const nomeIdade = nome + idade;
console.log(nomeIdade);


