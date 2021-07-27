console.log("Conversão de Tipos");

console.log("ano" + 2021); //'ano2021' (concatenação de textos)
console.log("2"   + "2");  //'22'      (concatenação de textos)
console.log(parseInt("2") + parseInt("2"));  //'4'convertendo texto para numero inteiro


console.log("10" / "2"); //'5' nesse caso não é necessario converter, pois o JS entende que não pode dividir textos
console.log("Thayz" / "2"); //o JS tentou converter o texto mas não achou numero entao 'NaN' (erro de execução) Not a Number

console.log(6.5 / 2);//para casas decimais sempre usar ponto

