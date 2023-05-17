"use: strict";

function somar() {
    let total = 0 
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total;
}

console.log(somar(5, 5, 5))


/*
    O argumentos presentes em uma função são armazenados em um objeto semelhante a um array, mas não é um array, que pode ser acessado com "arguments" como mostrado acima. Argumentos é um método legado e não é mais recomendavél utilizar. O operador "rest" atualmente é o mais recomendado. 

*/