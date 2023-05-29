function texto(hello, explicit) {
    console.log(`${hello}, ${this.nome}${explicit}`)
}

let obj = {
    nome: 'Murilo'
}

console.log(texto.call(obj, 'Olá', '!'))

// Call é uma built-in function. Ela declara explicitamente qual é o valor de "this". Muito útil em casos que queremos alterar o contexto de uma função especifíca. No caso acima. Declaramos uma função com dois argumento, e como instrução um console.log() com "this.nome" (uma referência a o valor de nome de um objeto).

// Quando damos o console.log() com o call, primeiro determinamos o contexto, ou seja, neste caso, seria o "obj", que é onde o contexto "this.nome" buscará o valor. E logo em seguida passamos os argumentos da função. 

// Outro exemplo

function somar(num1, num2) {
    return (num1 + num2) * this; 
}

let num3 = 5 

console.log(somar.call(num3, 1, 1))

/*
    Call geramente é utilizando para alterar o contexto de objetos, porém pode ser utilizado com variáveis como mostra o caso acima.

*/