var box = document.getElementById('box1');
var res = document.getElementById('res');
var seletor = document.getElementById('seletor')

function calcular(){
    if(box.value.length == 0){
        alert('[ERRO] verifique os dados e tente novamente!');
    } else {
        var n = Number(box.value)
        seletor.innerHTML = ''
        for(var x = 1 ; x <= 10; x++){
            var opções = document.createElement('option')
            opções.innerHTML = `${n} x ${x} = ${x * n}`
            seletor.appendChild(opções)
        }
        }

}