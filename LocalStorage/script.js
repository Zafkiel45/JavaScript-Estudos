const button = document.querySelector('#button');
const LocalStorageKey = 'To-do List'


button.addEventListener('click', function(){
    const input = document.querySelector('#title');
    
    if(!input.value){
        alert('eita')
    } else {
        // verifica se já existe algo armazendo localmente na Chave, senão existir, retorna um array vazio, se existir cria um objeto JavaScript com a string armazenada e armazena esse valor na varável "info".
        let info = JSON.parse(localStorage.getItem(LocalStorageKey) || "[]")
        // Aqui adiciona no array objetos com o valor do input.
        info.push({
            nome: input.value
        })
        // aqui escreve o array atualizado com o novos valores recebido do push
        localStorage.setItem(LocalStorageKey, JSON.stringify(info))
        
        // localStorage.removeItem(LocalStorageKey) <= exluir todos os itens armazendos
    }

})
