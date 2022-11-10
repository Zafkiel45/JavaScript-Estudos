let num = [1,29,39,28,11,299,29999]

num[7] = 800 //adiciona um elemento na posição 7
num.push(200) //adiciona mais um elemento ao final do array
num.sort() // organiza os elementos em ordem crescente

for(var c = 0; c < num.length; c++){
    console.log(num[c])
}