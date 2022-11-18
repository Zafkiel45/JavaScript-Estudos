var data = new Date();
var hora = data.getHours();
var minuto = data.getMinutes();
var res = document.getElementById('res');
var titulo = document.getElementById('titulo-1');
var main = document.getElementById('section-1');

if(hora >= 5 || hora < 13){
    titulo.innerHTML = `BOM DIA`
    main.style.backgroundColor = '#DBC21F'
    res.innerHTML = `Agora são exatamente ${hora}:${minuto}`
    document.body.style.backgroundColor = '#F2C42E'
}  else if(hora >=13 || hora < 6){
    titulo.innerHTML = `BOA TARDE`
    main.style.backgroundColor = '#DB9C1F'
    res.innerHTML = `Agora são exatamente ${hora}:${minuto}`
    document.body.style.backgroudColor = '#F99A23'
}