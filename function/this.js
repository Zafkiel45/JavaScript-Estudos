let obt = {
    nome: 'anonimo',
    teste: function() {
        return `Olá, ${this.nome}`
    }
}

console.log(obt.teste())

// o caso acima é chamado de: "Uso do this em um método". Em suma, usamos o this em um objeto, para fazer referência a ele mesmo, como mostrado no caso acima, onte o valor de "this", é o nome do objeto, então estamos consultado a propriedade "nome" , do objeto "obt" = this.nome

function testeDois(){
    return `Olá, ${this.nome}`
}

console.log(testeDois())

// O caso acima é chamado de: "Uso do this em uma função", onde o this em uma função regular tem como valor o escopo global "window". Por tanto, até que o método "nome" não seja definido no escopo global "window", retornar undifined. Entretanto é possível atribuir essa função como valor de uma propriedade de um objeto, assim tornando um caso de "uso de this em um método";

this.alert('Olá')

// o Caso acima é chamado de: "Uso do this sozinho", onde ele faz referência ao contexto global, "window". Assim podemos acessar as diversas propriedades e métodos globais. 

let p = document.createElement('p');

p.addEventListener('click', function(){
    this.style.display = 'none'
})

// no caso acima temos um exemplo de: "uso do this em um evento". Onde o this faz referência ao elemento HTML. Porém deves ter cuidados, pois o contexto pode mudar. A casos em que os eventos são chamados dentro de eventos, e pode acabar tornando complexo o valor do This;

let button = document.createElement('button');

button.addEventListener('click', () => {
    console.log(this === window) // true
})

// O uso do this em arrown functions possui dois comportamentos, em um objeto, o this se refere ao objeto, porém fora do contexto de objetos, o this se refere ao contexto global (window). 