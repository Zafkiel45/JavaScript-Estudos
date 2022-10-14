//OPERADORES ARITMÉTICOS

//Adição
var n1 = 5 
var n2 = 3 
var res_n = n1 + n2 // A variável "res_n" recebe a soma de "n1" e "n2"

console.log(res_n); // mostra no terminal o resultado, no caso, 8. 

//Subtração 

var m1 = 2
var m2 = 3
var res_m = m1 - m2  // recebe o resultado da subtração de 'm1' e 'm2'

console.log(res_m); // mostra o resultado no terminal, no caso, -1

// Multiplicação 

var b1 = 2
var b2 = 10 
var res_b = b1 * b2 // armazena o resultado da multiplicação

console.log(res_b); // mostra o resultado no terminal, no caso, 20

//Divisão 

var c1 = 10
var c2 = 2
var res_c = c1 / c2 // armazena a divisão das variáveis

console.log(res_c); // mostra no terminal o resultado da divisão, no caso, 5. 

// Potenciação 

var x1 = 10
var res_x = x1**2 // armazena o resultado da potência 

console.log(res_x); // mostra o resultado no terminal, no caso, 100.

// Resto de divisão inteira 

var j1 = 5
var j2 = 2 
var res_j = j1 % j2 //armazena o resto da divisão inteira

console.log(res_j); // mostra no terminal o resto da divisão inteira, no caso, 1. 

/*ORDEM DE PRECEDÊNCIA 

-()
-**
- / * %
- + - 

*/

//OPERADORES DE ATRIBUIÇÃO

//incrementar

var school = 2 
school ++; // incrementa 1 

console.log(school); //mostra o resultado no terminal, no caso, 3.

//Decrementar 

var uno = 10 
uno --; //decrementa 1 

console.log(uno); // mostra o resultado no terminal, no caso, 9.

//Abreviação adição 

var escola = 2 
escola +=2 // soma 2 a variável 

console.log(escola); // mostra no terminal o resultado, no caso, 4. 

//Abreviação subtração 

var carro = 10 
carro -=5 //subtrai 5 da variável

console.log(carro); // mostra o resultado no terminal, no caso, 5.

//Abreviação Multiplicação 

var toddynho = 2
toddynho *=10 // multiplica a variável por 10

console.log(toddynho); // mostra o resultado no terminal, no caso, 20. 

//Abreviação divisão 

var chocolate = 10 
chocolate /= 2 // divide a variável por 2 

console.log(chocolate); // mostra o resultado no terminal, no caso, 5

//Abreviação potenciação 

var bélico = 2 
bélico **= 2 // eleva a variável ao quadrado 

console.log(bélico); //mostra o resultado no terminal, no caso, 4.

//Abreviação Restos Inteiros 

var resto = 5
resto %= 2 // divide por 2 a variável e armazena o resto. 

console.log(resto); // mostra no terminal o resultado, no caso, 1. 

//OPERADORES RELACIONAIS 


// Maior que

var mu = 10
var mi = 5

console.log( mu > mi); // mostra no terminal se a primeira variável é maior que a segunda, retornando um valor booleano

//Menor quê

var ki = 20 
var ti = 50 

console.log(ti < ki); //  mostra no terminal se a primeira variável é menor que a segunda, retornando um valor booleano

// Maior ou igual 


var cla = 10 
var koko = 200000000000

console.log( cla >= koko); // mostra no terminal se a primeira variável é maior ou igual a segunda, retornando um valor booleano


// Menor ou igual 


var xa = 10 
var xo = 10

console.log( xa <= xo); // mostra no terminal se a primeira variável é menor ou igual a segunda, retornando um valor booleano

// Igual 

var iden = 10 

console.log(iden == 10); //verifica se a variável tem o mesmo valor que o número em questão

//Estreitamente igual 

var restrito = '10'

console.log( restrito === 10); //Verifica se a variável possui o mesmo valor e se é do mesmo tipo. 

// Diferente 

var estrange = 10 

console.log(estrange != 10.5); // verifia se a variável é diferente do valor em questõ 

//Estreitamente diferente  

var very_estranho = '100'

console.log(very_estranho !== 100); 

//OPERADOR LÓGICO 

//Negação 

var MIMIMI = 10 >= 1
var resultade = !MIMIMI

console.log(resultade); //Inverte o valor. A primeira variável é true, mas o operador de negação invertou para false

// Conjunção 

var MaiorDeIdade = true 
var Estudante = true 
var tudoCerto = MaiorDeIdade && Estudante // Verifica se ambas as viáveis são True 

console.log(tudoCerto); //Mostra no terminal o resultado da comparação retornando um valor booleano. 

// Desconjunção 

var canetaAzul = true 
var canetaPreta = false 
var recebi = canetaAzul || canetaPreta // Verifica se pelo menos um dos dois é verdadeiro. 

console.log(recebi); // Mostra no terminal o resultado da comparação retornando um valor booleano. 

//ORDEM DE PRECEDÊNCIA 

/*

-!
-&&
-||

*/

//OPERADOR TERNÁRIO 

//Esté operado realiza um teste, e dependendo do resultado, retorna dois valores diferentes.~

//Exemplo: 

var Nota = 7 
var decisão = Nota >= 7 ? 'Aprovado' :'reprovado' // Compara e mostra o valor correpondente a true e false

console.log(decisão); // Mostra o resultado no terminal com a saída que especificamos. 