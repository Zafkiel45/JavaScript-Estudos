var data = new Date();
var ano = data.getFullYear();
var box = document.getElementById('ano');
var res = document.getElementById('res');
var img = document.createElement('img');
var sexo = document.getElementsByName('genero')
var idade = ano - Number(box.value)

function verificar() {
    if(box.value.length === 0 || Number(box.value) > ano ){

        window.alert('[ERRO] Verifique os dados e tente novamente')

    } else {  
        var gênero = ''
        if(sexo[0].checked){
            gênero = 'Masculino'


            if(idade >0  && idade <7){
                img.setAttribute('src' , 'imagens/bebê.png')
            }
    
        } else if(sexo[1].checked){
            gênero = 'Feminino'
        }

        res.appendChild(img)
    }
}