let computador = {
    placa_de_vídeo: {
        modelo: 'GTX 750',
        vram: '2GB',
    },
    Processor: {
        modelo: 'intel Xeon E3',
        frequência: '3.10Ghz'
    }, 
    placa_mãe: undefined, 
    funcionando: true,
    problemas: false, 
    preço: 3000, 
    monitor: null
}

// anime um objeto armazenado dentro de uma variável. Um objeto pode conter outros objetos.
// para cada item do objeto precisamos declarar uma "expressão" e um "identificador" separado por ":" como visto acima
// podemos atribuir qualquer valor a uma propriedade. até mesmo uma função. 
// Para acessar as propriedades utilizamos o '.', como mostrando no "console.log()" abaixo.

console.log(computador.placa_de_vídeo.modelo);


// =================================================================================================================

//aqui temos um array que contém um objeto. observa-se que o objeto dentro do array foi declaro com colhetes ("[]")
// no array apenas separamos valores, não inserimos expressões e indentificadores como no objeto acima. 
/* 
    para acessar os valores contindo no array fora do objeto é simples. podemos simplesmente colocar "anime[0]" que vai mostrar o valor no indes [0], no caso, "akame ga kill". para acessarmos os valores dentro do objeto basta fazer da seguinte forma: "anime[1] (esse "[1]" indiica que é o objeto na posição [1])[0]" no final ficará assim: 
    "anime[1][0] que vai retornar um valor do objeto [1] e o valor [0] do objeto [1]", no caso: "gore". Exemplo abaixo.
*/ 

let anime = ['akame_ga_kill', ['gore',17, 2014]];

console.log(anime[1][0]);

