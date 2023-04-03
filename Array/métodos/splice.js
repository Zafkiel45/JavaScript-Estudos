const fruts = ['banana', 'maçã', 'melão'];
const fruta = ['pêra', 'abacaxi', 'manga']
console.log(fruts.splice(0,2))
console.log(fruta.splice(1,0,'Kiwi','jaca'))
console.log(fruta)


// O método splice() recebe dois parâmetros, onde o primeiro indica de onde deve começar(posição) e o segundo até onde remover(posição). então no primeiro exemplo com "fruts", remove o elemento da posição 0 até o elemento da posição 2, e retorna um novo array com os elementos exluídos. Se não exluir nada, retorna um array vazio.

// Splice também é utilizado para adicionar elementos em uma posição específica. por exemplo, eu passo o primeiro parâmetro onde deve-se alterar, e o segundo parâmetro eu passo 0, para não expluir nenhum elemento, e passo um terceiro parâmetro ou até mesmo um quarto, quinto, sexto e assim por diante... para adicionar na posição 1, os novos elementos. retornando um array vazio, pois não exluir nenhum elemento. 
