for(let x = 0; x <= 10; x++) {

    console.log(x);
    
    if(x === 5) {
        break // o break para caso a  variável "x" seja = 5. Somente utilizado em laços ou swtich
    }
}

console.log('deu o break')

for(let i = 20; i > 0; i--) {

    if(i == 10) {
        continue  // pula 10, mas não para como o break, continua o loop até o final.
    }
    console.log(i)
}

let o = {x: 1, y:2, z:3}

for(let p in o) { // variável p armazena o nome de todos os objetos enumeráveis
    console.log(p + ":" + o['x'])
}