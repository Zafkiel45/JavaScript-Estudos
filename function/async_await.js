
function ObterNome(){
    return new Promise((resolve, error) => {
        setTimeout(() => {
            resolve('Tudo certo')
        }, 2000)
    })
}

async function MostrarResult() {
    console.log('AOBA 1')

    let result = await ObterNome()
    console.log(result);

    console.log('AOBA 2')
}

MostrarResult()

// Funções assicronas funcionam semelhante a promises, inclusive trabalham em conjuto. Para definir-mos uma função assícrona, basta colocar um "async" antes da palavra chave "function". e para que a função assícrona espere um resultado para executar o restante das intruções, é necessário colocar a palavra chave "await" como mostra acima. funções assícronas é muito útil para consultar dados em um banco de dados. ESTUDO MAIS SOBRE ISSO. 