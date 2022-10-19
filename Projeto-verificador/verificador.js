function confirmar() {

    var data = new Date()              //Variáveis que armazena o conteúdo do HTML e Data
    var ano = data.getFullYear()
    var box1 = document.getElementById('ano')
    var resultado = document.getElementById('res')
    var img = document.createElement('img');
    img.setAttribute('id' , 'foto');
    
    if (box1.value.length == 0 || Number(box1.value) > ano ) {       //Especifica as obrigatoriedades
        alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var sexo = document.getElementsByName('sexo')  // Outras variáveis utilizadas 
        var idade = ano - Number(box1.value)
        var gênero = ''  // Variável que armazena o valor dependendo da opção marcada no HTML

        if(sexo[0].checked) {         // Condição que especifica qual é o valor do gênero 
            gênero = 'Masculino'
            if(idade >=18 && idade <20)
            img.setAttribute('src' , 'mulher.jpg');

        } else if(sexo[1].checked) {
            gênero = 'Feminino'
            if(idade >=18 && idade <20)
            img.setAttribute('src' , 'homem.jpg')
        }
        resultado.innerHTML = `O gênero é ${gênero} e sua idade é ${idade}`
        resultado.appendChild(img)
    } 
}