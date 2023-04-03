// const prototipo = [
//     {
//         nome: 'joão',
//         idade: 20,
//         profissão: 'Padeiro'
//     },
//     {
//         nome: 'Ana',
//         idade: 18, 
//         profissão: 'Adminstradora geral'
//     },
//     {
//         nome: 'Renata',
//         idade: 48,
//         profissão: "Desenvolvedora fullStack"
//     }
// ]

// console.log(prototipo)

// const nome = prototipo.map(function(nome){
//     return nome.nome
// })

// console.log(nome)

// const idade = prototipo.map(function(idade){
//     return idade.idade
// })

// console.log(idade)

// const profissão = prototipo.map(function(profissão){
//     return profissão.profissão
// })

// console.log(profissão)



/*
    Utilizando map() para filtrar dados específicos 
*/ 



// const table = ['banana', 'maçã', 'laranja', 'melão', 'melancia']

// const filter = table.map(function(comprimento){
//     return comprimento.length == 6
// })

// console.log(filter)


/*
    filtrando todos os elementos que possuem comprimento 6, retornando valor lógico
*/ 

const normalize = ['joão', 'Murilo', 'carlos', 'ana', 'Junioho'];

const normalized_big = normalize.map(function(normalizar){
    return normalizar.toUpperCase()
})

const normalized_small = normalize.map(function(normalizar){
    return normalizar.toLowerCase()
})

console.log(normalized_big)
console.log(normalized_small)

//Formatando valores com map()

