const mult_1 = [1,2,3,4,5]
const mult_2 = mult_1

console.log(mult_1.reduce(function(acumulador, atual){
    return acumulador * atual
}))

console.log(mult_1.reduceRight(function(acumulador, atual){
    return acumulador * atual
}))

//  ReduceRight() faz o mesmo que reduce, porém da direita para a esquerda. 