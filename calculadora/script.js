var res = document.getElementById('res');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');

function somar(){
    var num_1 = Number(num1.value);
    var num_2 = Number(num2.value);
    var num_3 = num_1 + num_2 
    if(num1.value.length == 0 || num2.value.length == 0){
        alert('ERRO! Veirifique os dados e tente novamente')
    } else {
        res.innerHTML = `O resultado da soma de ${num_1} e ${num_2} foi ${num_3}`
    }
}

function subtrair(){
    var sub1 = Number(num1.value);
    var sub2 = Number(num2.value);
    var sub3 = sub1 - sub2
    if(num1.value.length == 0 || num2.value.length == 0){
        alert('ERRO! Veirifique os dados e tente novamente')
    } else {
        res.innerHTML = `o resultado da subtração de ${sub1} e ${sub2} é ${sub3}`
    }
}

function multiplicar(){
    var mult1 = Number(num1.value);
    var mult2 = Number(num2.value);
    var mult3 = mult1 * mult2
    if(num1.value.length == 0 || num2.value.length == 0){
        alert('ERRO! Veirifique os dados e tente novamente')
    } else {
        res.innerHTML = `O resultado da multiplicação de ${mult1} e ${mult2} é ${mult3}`
    }
}

function dividir(){
    var div1 = Number(num1.value);
    var div2 = Number(num2.value);
    var div3 = div1 / div2
    if(num1.value.length == 0 || num2.value.length == 0){
        alert('ERRO! Veirifique os dados e tente novamente')
    } else {
        res.innerHTML = `O resultado da divisão entre ${div1}e ${div2} foi ${div3}`
    }
}