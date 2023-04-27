const cocant = [1,2]

console.log(cocant.concat(3,4,5,6,7,8,9,10))

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let newArray = array1.concat(array2, array3);

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


/* 

O concat copia um array e cria um outro baseado no array fornecido. traduzindo:o concant cria um novo array, com os mesmo elementos que já existem no array antigo, e adiciona novos elementos no novo array. para adicionar um novos elementos no novo array, basta apenas adicionar os elementos como argumento de concant. 

Exemplo: array.concat(10,9,8,7,6,5,4,3,2,1)


No exemplo acima o concat cria um novo array com os elementos antigos já existentes e adiciona novos elementos do 10 até o 1. 


Concat serve também para juntar arrays um nos outros como mostrado no segundo exemplo. 

*/ 