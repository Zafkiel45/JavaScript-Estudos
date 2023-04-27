let meuArray = [12, 15, 8, 20, 25];
let todosMaioresQue10 = meuArray.every(function(elemento) {
    return elemento > 10;
});
console.log(todosMaioresQue10); // retorna false, pois o elemento 8 não é maior que 10
