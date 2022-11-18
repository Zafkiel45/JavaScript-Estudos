var agora = new Date()
var hora = agora.getHours()
var img = document.getElementById('imagem');
var atual_hora = document.getElementById('horas');
var comprimento = document.getElementById('titulo');
var sec = document.getElementById('seção')

if(hora > 5 && hora < 12) {
    document.body.style.backgroundColor = '#F7C477'
    img.src = 'imagens/dia.jpg'
    atual_hora.innerHTML = `São exatamente: ${hora}`
    comprimento.innerHTML = 'Bom Dia!'

} else if (hora >=12 && hora < 18) {
    document.body.style.backgroundColor = '#F77F19'
    img.src = 'imagens/tarde.jpg'
    atual_hora.innerHTML = `São exatamente: ${hora}`
    comprimento.innerHTML = 'Boa tarde!'

} else if(hora >=18 && hora < 23) {
    document.body.style.backgroundColor = '#2B282A'

    img.src = 'imagens/noite.jpg'
    atual_hora.innerHTML = `Agora são exatamente: ${hora} horas`
    comprimento.innerHTML = 'Boa noite!'
}