let meuArray = [12, 15, 8, 20, 25];
let todosMaioresQue10 = meuArray.every(function(elemento) {
    return elemento > 10;
});
console.log(todosMaioresQue10); // retorna false, pois o elemento 8 não é maior que 10

// O método Every retorna um valor booleano. Caso todos os elementos teste true para o teste lógico, no caso acima: elemnto > 10; retorna true, porém se um não for verdadeiro, retorna false. Lembra um pouco o operador lógico/relacional: && 
