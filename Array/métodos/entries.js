const teste = [1,2,3,4,5,6,7,8,9];
const teste2 = [1,40,3,4,5,6,7,8,9];
const objeto = {"pessoas": "Ana"}

const teste1 = Object.entries(teste).forEach(function(item){return console.log(item)})
const teste3 = Object.entries(teste2);
const entries = Object.entries(objeto)


console.log(teste3[1])
console.log(entries[0])

// O entries() é utilizado para retornar a chave e o valor de um objeto. A sintaxe é Object.entries(object) e automatimcanete já irá criar um array com subrrays onde o índice é a chave e o valor é o próprio elemento. 

// muito útil quando queremos tanto a chave quanto o valor da chave para associar a algo. 
