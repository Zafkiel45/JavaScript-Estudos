const array = [1,2,3]
console.log([...array])
const string = 'akame' 
console.log([...string].map(function(item){ return item.toUpperCase()}))

function funcao(x, y, z) {
    return x + y + z;
}

const numeros = [1, 2, 3];
console.log(funcao(...numeros)); // Output: 6


// O spread operador serve para criar uma cópia de um objeto iterável(array, strings, map e etc...). O spread é de simples uso, apenas copia algo do objeto iterável original, assim abrindo possibilidades para copiar arrays, combinar arrays, e o spread ainda cria um elemento para cada caractere de uma stringm, sendo útil para quando queremos manipular cada caractere. 

// Não recomendado utilizar spread em objetos que contenha muitos dados pois pode trazer cópias indesejadas e não abusar muito do uso pois o código pode se tornar menos iligível.