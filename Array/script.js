let num = [1,29,39,28,11,299,29999]

num[7] = 800 //adiciona um elemento na posição 7
num.push(200) //adiciona mais um elemento ao final do array
num.sort() // organiza os elementos em ordem crescente
let pos = num.indexOf(28) // o IndexOf busca a chave de indentificação do valor solicitado. Quando se busca uma chave que não existe, o script retorna um valor -1


console.log(pos)
/*
for(var c = 0; c < num.length; c++){
    console.log(num[c])
}
*/

//laço otimizado para arrays. Nele precisamos colocar apenas o nome da variável(Inicializador) e o nome da variável que está armazenando o array. 

/* 
for(let x in num){
    console.log(num[x])
} */