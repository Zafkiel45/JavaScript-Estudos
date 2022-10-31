function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let box = document.getElementById('idade')
    let res = document.getElementById('res');
    let img = document.createElement('img')
    

    if(box.value.length == 0 || Number(box.value) > ano){
        alert('VERIFIQUE OS DADOS E TENTE NOVAMENTE!')
    } else {
        let gênero = document.getElementsByName('sexo')
        let idade =  ano - Number(box.value);
        let sex = ''

        if(gênero[0].checked){
            sex = 'Homem'
            if(idade >= 1 && idade < 10) {
                img.setAttribute('src' ,'imagens/bebe.png' )
            } else if(idade >= 10 && idade < 50){
                img.setAttribute('src' , 'imagens/Homem jovem.png')
            } else if(idade >=50){
                img.setAttribute('src' , 'imagens/homem velho.png')
            }
        } else {
            sex = 'Mulher'
            if(idade >1 && idade < 10){
                img.setAttribute('src', 'imagens/bebe.png')
            } else if(idade >=10 && idade < 50){
                img.setAttribute('src' , 'imagens/mulher jovem.png')
            } else if(idade >= 50 ){
                img.setAttribute('src' , 'imagens/mulher velha.png')
            }
        }

        res.innerHTML = `<p>foi dectado um(a) ${sex} de ${idade} anos</p>`
        res.appendChild(img)
    }
}