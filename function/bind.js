function nome(comprimento){
    console.log(`${comprimento}, ${this.nome}`)
}

let obj =  {
    nome: 'Murilo'
}

let comprimento = nome.bind(obj, "Olá")

console.log(comprimento())


// Bind é um tanto diferente do apply e call. Ele cria uma função derivada de uma original, assim podendo usar em diversos lugares. Vale lembrar que o contexto é o pe definido da mesma forma que call e apply. 