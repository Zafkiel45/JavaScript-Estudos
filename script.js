let teste = {}
let array = [1,1,1,2,2,2,3,3,3,3,3,4,2,5,1,10]
let max = 0 
let comum = 0 



    array.forEach(function(item){
        if(teste[item]){
            teste[item]++
        } else {
            teste[item] = 1 
        }
        if(teste[item] > max) {
            max = teste[item]
            comum = item
            console.log(comum)
        }
    
    })


// objectos 


console.log(teste)
// console.log(max)
// console.log(comum)