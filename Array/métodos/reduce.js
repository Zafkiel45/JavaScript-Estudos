const media = [2, 5, 10, 2, 5]
const media_array = media.reduce(function(acumulador, atual, index){
    let soma_média = acumulador + atual;

    if(index == media.length - 1){
        return soma_média / media.length
    } else {
        return soma_média;
    }
}, 0)

console.log(media_array)

// O método reduce() é um método muito importante para a programação funcional, sendo muito utilizada em diversos casos e tendo muitos comportamentos. 

// No exemplo acima, utilizo o reduce() para calcular a média de um aluno. Para isso criamos um array com as notas do aluno, e depois aplicamos o método reduce(). Onde os argumentos da função de callback é "acumulador", "atual", "index". O acumulador é o valor acumulado armazenado, que começa com zero(o zero foi declarado no final da função) e o atual faz operação com o acumulador. Já o index retorna a posição do atual elemento no array. depois armazenamos o valor do acumulador somado com o atual na variável "soma_média" e verificamos com uma condicional se o reduce() já pecorreu todo o array, se sim retorna a soma total dividido pelo o comprimento do array, senão retorna a soma atual para o acumulador e depois continua a somar até percorrer todo o array.

// ESTUDAR MAIS SOBRE
