const img  = document.querySelector('#img');
const file = document.querySelector('#file');

file.addEventListener('change', function(){
    const imge = file.files[0]
    const url = URL.createObjectURL(imge)

    img.src = url
    img.addEventListener('load', function(){
        URL.revokeObjectURL(url)
    })
})

// O "URL" é basicamente um objeto, e ao utilizar o método "createObjectURL()" ele transforma o objeto que está dentro dos parenteses em uma URL, assim sendo mais simples e conveniente criar endereços de imagens, audios e vídeos no geral de forma temporária. 

// O método "files[0]" serve especificamente para o input do tipo "file" do html, onde ele armazena o arquivo que foi selecionado na maquina. Como o input se comporta como array pois podemos selecionar multiplos arquivos, o [0] indica que devemos pegar o primeiro arquivo.

// O método  URL.revokeObjectURL(url) é usado para remover a URL criada, o que é muito importante pois pode ocorrer vazamento de memória e atrapalhar a performece. Lembrando que a URL fica no navegador até ela ser removida. 
