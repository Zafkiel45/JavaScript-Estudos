// Repetições também chamadas de laços repete uma função enqunto uma conndição for verdadeira. 
// EXEMPLO

var contagem = 1

while(contagem <=10){
    console.log(`Passo ${contagem}`)
    contagem++;
}

// O código acima repete o processo até que a variável seja menor ou igual 10, depois disso o processo é encerrado e o fluxo segue normalmente. 

//Outra forma de repetição 

do {
    console.log(`passo ${contagem}`)
    contagem++;
} while(contagem <= 10)

//realisa a repetição da mesma forma que o código acima, entretanto existe uma diferença. A repetição while sozinha executando enquando uma condição for verdadeira, enqundo o Do while executado o bloco primeiro e depois verifica se a condição é verdadeira ou não.