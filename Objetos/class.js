// class Anime {
//     _nome
//     _ano
//     _gênero
//     _censura
// }

// let anime = new Anime()
// let anime2 = new Anime()

// anime._ano = 2014
// anime2._ano = 2018
// console.log(anime._ano);
// console.log(anime2._ano)

//Acima tá o método errado, que eu aprendi quando iniciei meus estudos de classes



class cliente {
    // _nome
    // _idade
    // _cargo
    // _regiao
    // _numero_da_sorte
    constructor(nome='joão', idade, cargo, regiao, sorte='5') {
        this._nome = nome
        this._idade = idade
        this._cargo = cargo
        this._regiao = regiao
        this._numero_da_sorte = sorte
    }

    get nome() {
        return this._nome
    }
    get idade(){
        return this._idade
    }
    set nome(novoValor) {
        this._nome = novoValor
    }
    set idade(NovaIdade) {
        this._idade = NovaIdade
    }
}

let cliente_1 = new cliente('Jonas', 44, 'gerente', 'Estados Unidos(EUA)')

cliente_1.nome = 'Rubya'
cliente_1.idade = sorte()

function sorte() {
    return 5*2
}

console.log(cliente_1)

//com o método constructor passamos argumentos, e os valores desse argumento passamos dentro do new Object(...). Depois armazenamos esses valores do argumento nos atributos. 