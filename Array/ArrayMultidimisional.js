let arry = [[1,2,3], [4,5,6], [7,8,9]];

console.log(arry[0][2])

// isso é um array Multidimisional. Em suma, é um array que contém um array como elementos, nesse caso nos temos um array que contém três elementos, e cada elemento contém 3 outros elementos. 

// para inteirar sobre um array MultiDimisional 

const meuArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < meuArray.length; i++) {
    for (let j = 0; j < meuArray[i].length; j++) {
        console.log(meuArray[i][j]);
    }
}
