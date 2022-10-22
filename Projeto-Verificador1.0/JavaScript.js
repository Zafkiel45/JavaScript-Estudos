var data = new Date();
var ano = data.getFullYear();
var box = document.getElementById('ano');
var res = document.getElementById('res');
var sexo = document.getElementsByName('genero')
var gênero = ''

function verificar() {
    if(box.value.length === 0 || Number(box.value) > ano ){

        window.alert('[ERRO] Verifique os dados e tente novamente')

    } else {  
        var img = document.createElement('img');
        var idade = ano - Number(box.value)

        if(sexo[0].checked){
            gênero = 'Homem'
            if(idade <=6 && idade < 10 ){
                img.setAttribute('src' , 'Imagens/bebê.png')
            }
        } else if(sexo[1].checked){
            gênero = 'Mulher'
        }
        
        res.innerHTML = `Foi detectado um(a) ${gênero} de ${idade} anos`
        res.appendChild(img)
    }
}