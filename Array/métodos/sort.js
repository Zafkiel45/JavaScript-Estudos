const ordenar = ['banana', 'amor', 'tower', 'genshin', 'pokémon', 'milly']
const num_ordenar = [2,10,29,1,100,456,1000,15]

console.log(ordenar.sort())
console.log(num_ordenar.sort(function(a, b){
    return a - b 
}))

//  O método sort() orde as strings em ordem alfabetica. entretanto, como visto acima, para order numeticamente, é necessário passar uma função de callback, que subtrai "b" de "a", retornando um valor negativo, ou se "a" for igual a "b" retorna zero e se "a" for maior que "b" retorna um valor positivo. O sort() utiliza essa informação para posicionar os números em ordem crescente, atráves do método de algoritmo QuickSort.