const obj = {
    nome: 'Murilo', 
    idade: function(){
        console.log(`Olá, ${this.nome}`)
        return this.nome
    }
}

const obj_2 = {
    nome: 'Emilly',
}

obj_2.idade = obj.idade

let nome = obj_2.idade()

console.log(nome)

// Functions Borrowing é como "pegar emprestado uma função", basicamente, podemos reutilizar uma mesma função, em outros contextos, assim evitando a escrita repetitiva de uma função que é "genérica" (faz exatamente a mesma coisa para outros contextos). neste caso acima, estamos reutilizando uma função de um objeto em um outro objeto...

