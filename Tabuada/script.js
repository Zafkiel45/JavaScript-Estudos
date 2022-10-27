var box = document.getElementById('box1');
var res = document.getElementById('res');

function calcular(){
    if(box.value.length == 0){
        alert('[ERRO] verifique os dados e tente novamente!')
    }

    for(var result = 0; result <= 10; result++){
        var final = result * Number(box.value);
        res.innerHTML = `O resultado é: ${final}`
    }
}