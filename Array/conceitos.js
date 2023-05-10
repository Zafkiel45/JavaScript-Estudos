let num = 3.14 
let colection = [num, num + 1]

console.log(colection[1].toFixed(2))
console.log('PRÓXIMO EXEMPLO')

//como demostrado acima. Arrays podem armazenas variáveis, assim tendo o valor de variável no array. 

//Array são dinâmicos e podem ter cerca de 4 milhões de elementos

let complex_colection = [1, [2, {nome: 'joão', idade: 20}, 3, {nome: "aline", idade: 33}]]

console.log(complex_colection[1])

//Array muito complexo acima.

console.log('teste de arrays vazios');

let empty = [,,]

console.log(empty.length)

//por mais que não tenha valores declarados, o array tem comprimento de 2. 
//consultar esses valores, retornará undefined 

let constructor = new Array(10)
console.log(constructor[0])