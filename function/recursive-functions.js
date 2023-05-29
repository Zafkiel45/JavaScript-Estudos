function fatorial(x) {
    if(x === 0 || x === 1){
        return 1;
    }

    return x * fatorial(x - 1);
}

console.log(fatorial(5))

// recursive functions, ou funções recursivas, são funções que funcionam semelhante a um loop. Ela chama ela mesma até que uma determinada condição seja verdadeira. No exemplo acima, utilizamos uma função que calcula o fatorial de 5. e declaramos uma condição, para que não criemos um loop infitivo e quebre todo o programa. Se o argumento passado a função for 0 ou 1, returna 1. A condição é a condição de parada para não criar um loop ininito. até que essa condição de parada seja atingida, a função chamará ela mesma até que atinja o ponto de parada;.


