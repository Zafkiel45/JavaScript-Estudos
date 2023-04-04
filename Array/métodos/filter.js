const game = ['Tales of Arise', 'Tales of Berseria', 'Tales of Zestiria','genshin']
const filter_gamer = game.filter(function(jogo){
    return jogo.length == 14 || jogo.length == 7
})

console.log(filter_gamer)

function filtro(frutas){
    return frutas.length === 4 || frutas.length === 6
}

const filtrar = ['banana', 'maça', 'pêra', 'melancia', 'laranja', 'qiui']
const comprimento = filtrar.filter(filtro)

console.log(comprimento)

/*

Retorna todos que atendem a uma determinada condição(true) e cria um novo array com somente os elementos filtrados.

OBS: O filter retorna o elemento do array e não um valor booleano que nem o map() 

*/ 