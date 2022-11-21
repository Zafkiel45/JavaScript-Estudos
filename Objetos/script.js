let murilo = {
    camisa: "preta",
    short: "azul",
    feliz: true,
    carro: false,
    estudante: 'sim',
    PC: {
        placa_de_vídeo: 'GTX 750',
        placa_mãe: undefined,
        teclado: 'AOAS',
        mouse: 'AOAS',
    },
    correu: function(km){
        alert("correu " + km + " km")
    }
}

murilo.correu(20) // acessando a função do objeto


/*
É possivel também atribuir arrays a objetos caso se faça necessário. Além disso, há uma nomenclatura para os items no objeto acima. 


-A váriavel com o nome 'murilo' é um objeto pois seu valor está entre chaves {}
-Também foi definito propriedades. Onde se encontra 'camisa', 'short' e etc... são propriedades
-tudo que vem depois dos dois pontos : é o valor da propriedade. 
-Podemos atribuir valores primitivos e objetos dentro do objeto como desejarmos.
-Utiliza-se vírgula para separar as propriedades.
-para acessar uma propriedade a sintaxe é a seguinte: murilo.camisa (acessa a propriedade camisa). se quisermos acessar uma propriedade do objeto dentro do objeto a sintaxe é: murilo.PC.placa_mãe (para acessar a placa mãe)


<------------------------------------------ FIM DO BÁSICO ------------------------------------->
*/