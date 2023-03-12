let teste = ['eu', 'amo', 'milly']

console.log(teste.join('-'))
console.log(teste.reverse().join(' '))

// O método Join() transforma os elementos do array em strings, e serão separados por padrão por vírgulas ','. Caso passemos algum paramentro entre aspas dentro de join(), então esse valor aparecerá entre os elemento.  

//O método reverse altera o Array e deixa a ordem dos elementos ao contrário. 


let classificar = [2,1,33,1,100,23,69]
let classificar_name = ['banana', 'zebra', 'quimera', 'carro', 'amor', 'aemeba']

console.log(classificar_name.sort())
console.log(classificar.sort(function(a, b){
    return a - b 
}))

//O método sort() ordem em ordem alfabetica ou númerica. Para ordenar em ordem númerica é necessário criar uma função de comparação como mostrado acima. 


let concaten = [1,2,3]

console.log(concaten.concat([1,2]))

//copia o array e cria um novo com os elementos passados dentro do concat()