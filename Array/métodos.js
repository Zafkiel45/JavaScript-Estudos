
const produtos = [
    { nome: 'camisa', preco: 20.99 },
    { nome: 'calça', preco: 50.50 },
    { nome: 'meia', preco: 5.99 }
];

const produtosFormatados = produtos.map(function(produto) {
    return `${produto.nome} - R$${produto.preco.toFixed(2)}`;
});

console.log(produtosFormatados);
  // [ 'camisa - R$20.99', 'calça - R$50.50', 'meia - R$5.99' ]

function filtro(frutas){
    return frutas.length === 4 || frutas.length === 6
}

const filtrar = ['banana', 'maça', 'pêra', 'melancia', 'laranja', 'qiui']
const comprimento = filtrar.filter(filtro)

console.log(comprimento)

//filtando elementos que atendem as condições; 
//cria um novo array com todos os elementos que correpondem a true 

const media = [2, 5, 10, 2, 5]
const media_array = media.reduce(function(acumulador, atual, index){
    let soma_media = acumulador + atual

    if(index === media.length - 1) {
        return soma_media / media.length
    } else {
        return soma_media
    }
    
}, 0)

console.log(media_array)