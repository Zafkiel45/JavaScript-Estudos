/*
    closures é um assunto mais complexo, porém não tanto assim. closures é nada mais e nada menos que uma referência do escopo externo ao escopo interno. Isso é uma poderosa ferramenta, pois closures nos permite acessar variáveis e outras coisas que já não estão mais disponíveis no escopo externo. 

    Por exemplo: 

*/

function somar(){
    let num_1 = 1
    let num_2 = 2
    let total = num_1 + num_2
    function closures(){
        let totalmente = total * num_1* num_2
        return totalmente;
    }
    return closures;
}

console.log(somar()())


// aqui temos uma closure, onde o escopo externo "somar()" faz uma referência a função interna "closures()" com o return closures. A chave está aqui, utilizando as variáveis "num_1", "num_2" e "total" em uma closure, estamos preservando essa variáveis para utilizar de uma outra forma. Então mesmo que num_1, num_2 e total não esteja mais disponível, vamos ter acesso a esses valores mesmo assim, pois uma closure "lembra" das variávis