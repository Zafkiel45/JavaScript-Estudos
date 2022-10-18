

function confirmar() {
    var data = new Date()
    var ano = data.getFullYear;
    var box1 = document.getElementById('ano')
    var resultado = document.getElementById('res')
    
    if (box1.value.length == 0 || Number(box1.value) > ano ) {
        alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(box1.value)
        var gênero = ''

        if(sexo[0].checked) {
            gênero = 'Masculino'
        } else if(sexo[1].checked) {
            gênero = 'Feminino'
        }
        resultado.innerHTML = `O gênero é ${gênero} e sua idade é ${idade}`
    } 
}