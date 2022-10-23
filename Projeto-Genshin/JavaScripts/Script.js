var nome = document.getElementById('pesquisa');
var img = document.getElementById('imagem');
var container = document.getElementsByClassName('container-universal') [0]
var botão = document.getElementById('confirmar')

function clicou() {
    if(nome.value.length == 0){
        alert('[ERRO] Verifique os dados e tente novamente')
    } 

    switch(nome.value){
        case 'jean':
        case 'Jean' :
            img.src = 'imagens/jean.webp'
            document.body.style.backgroundColor = '#74C2A8'
            container.style.backgroundColor = '#77D99D'
            container.style.boxShadow = '3px 3px 5px #00A692'
            botão.style.backgroundColor = '#5D9C84'
            botão.style.boxShadow = '2px 2px 3px #28806A'
            botão.style.color = 'white'
            nome.style.backgroundColor = '#5D9C84'
            nome.style.border = 'solid 2px #28806A'
            break
        case 'eula':
        case 'Eula':
            img.src = 'imagens/eula.webp'
            document.body.style.backgroundColor = '#4DFCFF'
            container.style.backgroundColor = ' #9DEEF2'
            container.style.boxShadow = '3px 3px 5px #4D96FF'
            botão.style.backgroundColor = '#46B7C2'
            botão.style.boxShadow = '2px 2px 3px #3C9DA6'
            botão.style.color = 'white'
            nome.style.backgroundColor = '#46B7C2'
            nome.style.border = 'solid 2px #3C9DA6'
            break
    }

}