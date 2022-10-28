function calcular(){
    let num = document.getElementById('multiplication');
    let item = document.getElementById('result');

    if(num.value.length == 0){
        alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        item.innerHTML = ''
        for(var s = 1 ; s <= 20 ; s++){
            var opções = document.createElement('option');
            opções.innerHTML = `${Number(num.value)} x ${s} = ${Number(num.value) * s}`
            item.appendChild(opções)
        }
    }
}