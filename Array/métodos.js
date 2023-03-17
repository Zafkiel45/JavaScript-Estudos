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

let sobarray = [0,1,2,3,4,5]

console.log("nova parte do array " + sobarray.slice(1, 4))

//pega o array de entrada "array armazenado em uma variável" e cria um novo com o inicio e fim especificado.

let remove = ["banana", "maçã", "melancia", "carne", "doce"]

console.log(remove.splice(0,4))
console.log(remove)

//remove elementos de um array ou adiciona. O primeiro argumento indica onde começa (inicio) e o segundo elemento determina quantos elementos iremos excluir (fim). 

let last_firts = ['gore', 'ecchi', 'action', 'slice-of-life']

console.log(last_firts.push('hentai', 'netorare'))
console.log(last_firts.pop())

//push adiciona um ou mais elementos especificado dentro do array e retorna o novo comprimento do array; 

//pop remove o último elemento e retorna esse ultimo elemento.

let add_items = [2]

add_items.unshift(1,2,33,43)
console.log(add_items)
add_items.shift()
console.log(add_items)

//shift e unshift funciona de maneira semelhante a pop e push. A diferença é que ao invés de mexer com valores finais, mexe com valores iniciais. 

//unshift adiciona um ou mais elementos no inicio do array deslocando dos os outros arrays para abrir espaço, ou de uma outra forma, adicona +1 a todo os outros índices, retornando o comprimento 

//shift remove o primeiro item do array retornando o elemento que foi removido. 

let loop = ['Akame ga Kill','Vivy: Flouryta', 'Attack on Titan', 'Kaguaya Sama']

loop.forEach(function(nome){
    console.log(nome)
})

const produtos = [
    { nome: 'camisa', preco: 20.99 },
    { nome: 'calça', preco: 50.50 },
    { nome: 'meia', preco: 5.99 }
];

const produtosFormatados = produtos.map(function(produto) {
    return `${produto.nome} - R$${produto.preco.toFixed(2)}`;
});

console.log(produtosFormatados);
  // [ 'camisa - R$20.99', 'calça - R$50.50', 'meia - R$5.99' ]

function filtro(frutas){
    return frutas.length === 4 || frutas.length === 6
}

const filtrar = ['banana', 'maça', 'pêra', 'melancia', 'laranja', 'qiui']
const comprimento = filtrar.filter(filtro)

console.log(comprimento)

//filtando elementos que atendem as condições; 
//cria um novo array com todos os elementos que correpondem a true 

const media = [2, 5, 10, 2, 5]
const media_array = media.reduce(function(acumulador, atual, index){
    let soma_media = acumulador + atual

    if(index === media.length - 1) {
        return soma_media / media.length
    } else {
        return soma_media
    }
    
}, 0)

console.log(media_array)