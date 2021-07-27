console.log(`\n Trabalhando com loops`);

//LISTA COM ARRAY
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

//VARIAVEIS
const idadeComprador = 15;
const estaAcompanhada = false;
let   temPassagemComprada = false;
const destino = "Salvador"; //INDICANDO A VARIAVEL DESTINO RIO DE JANEIRO PARA USAR NO LOOP

//EXIBINDO A LISTA SEM ALGUMA VALIDAÇÃO
console.log("\n Destinos possiveis:");
console.log(listaDeDestinos);

//CRIANDO VARIAVEL PARA GUARDAR A CONDIÇÃO QNDO COMPRADOR FOR MAIOR DE IDADE OU ESTIVER ACOMPANHADO
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

//FAZENDO LOOP PARA VERIFICAR SE DESTINO PROCURADO EXISTE NA MINHA LISTA
let contador = 0; //CRIANDO VARIAVEL PARA O CONTADOR DO LOOP, CONTADOR COMEÇA COM 0
let destinoExiste = false; //VARIAVEL DO DESTINO INICIALMENTE É FALSE

while(contador<3){ //INDICANDO QNTOS REGISTROS ELE DEVE PASSAR, NO CASO TENHO 3, CONTADOR INICIA COM 0

    if (listaDeDestinos[contador] == destino){ //CONTANDO REGISTROS DA LISTA E COMPARANDO SE É IGUAL A VARIAVEL DECLARADA RIO DE JANEIRO
        destinoExiste = true; //ASSIM QUE ACHAR MUDA A VARIAVEL DESTINOEXISTE PARA TRUE, SE NÃO A VARIAVEL CONTINUA FALSE
        break; //E PARA O LOOP E NÃO EXECUTA MAIS
    }
    contador += 1;   //ATRIBUO SEMPRE NO FINAL O CONTADOR +1 PARA ASSIM NÃO ENTRAR EM LOOP INFINITO
} 

//APOS O LOOP ACIMA, VAMOS IMPRIMIR A MSG MOSTRANDO SE O DESTINO EXISTE OU NÃO
console.log("Destino existe: ", destinoExiste);
//A VARIAVEL destinoExiste INICIALMENTE É FALSE, ENTÃO SE A VARIAVEL destino QUE DECLAREI COMO "Rio de Janeiro" 
//NÃO TIVER NA MINHA LISTA, CONTINUARÁ FALSE

if (podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Desculpe, tivemos um erro!");
}   

//UTILIZANDO FOR
for (let contador2 = 0 ; contador2 < 3; contador2++)
   //inicialização:VARIAVEL DO CONTADOR = 0, MAIS COMUM NOME DA VARIAVEL DO CONTADOR SER i exemplo: (let i = 0 ; i < 3; i++)
   //condicional:  INDICANDO QNTOS REGISTROS ELE DEVE PASSAR, NO CASO TENHO 3, CONTADOR INICIA COM = 0
   //incremento:   ATRIBUO SEMPRE NO FINAL O CONTADOR +1 PARA ASSIM NÃO ENTRAR EM LOOP INFINITO, NO CASO DO FOR UTILIZA contador++
   {
    if (listaDeDestinos[contador2] == destino){ //CONTANDO REGISTROS DA LISTA E COMPARANDO SE É IGUAL A VARIAVEL DECLARADA RIO DE JANEIRO, 
                                                //MAIS COMUM NOME DA VARIAVEL DO CONTADOR SER i exemplo: if (listaDeDestinos[i] == destino){
        destinoExiste = true; //ASSIM QUE ACHAR MUDA A VARIAVEL DESTINOEXISTE PARA TRUE, SE NÃO A VARIAVEL CONTINUA FALSE
    }
   }
