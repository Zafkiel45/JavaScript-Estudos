let book = {
    titulo: "melhores animes" // criando um objeto
}

book.titulo = "melhores aberturas" // alterando o valor de uma propriedade
book.melhor = 'akame ga kill' // criando uma nova propriedade com o nome "melhor" e vaçpr "akame ga kill"
book["Waifu"] = "Esdeath" // também criando uma propriedade, mas com colhetes 

console.log(book.titulo);
console.log(book.melhor);
console.log(book.Waifu);

let eu = {
    nome: ""
}

for(i = 0; i < 3; i++) {
    eu.nome += ["Murilo " + i]
    console.log(eu.nome)
}