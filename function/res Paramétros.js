"use strict";

function res(...numbers){
    console.log(numbers.join(" "))
}

res("Akame", "ga", "Kill")

/*
    Res param, também conhecido como resto de parâmetros, é em suma, uma quantidade indefinida de argumentos. 

    Por exemplo: quando colocamos "..." seguido do nome do argumento "numbers", significa que podemos passar uma quantidade indefinida de valores na hora da chamada, neste caso, passei 3 valores: "Akame", "Ga", "kill". Esses valores são passados como valores do argumento "numbers", que se comporta como um array. É como se tivesse um array como argumento. É possível utilizar métodos de array, tanto que eu utilizei o "Join()" 
*/