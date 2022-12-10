function calcular(){
    let res = document.getElementById('res');
    let num1 = document.getElementById('number');
    
    if(num1.value.leght == 0 || Number(num1.value) == 0){
        alert('Erro')
    } else {
        let num2 = Number(num1.value);
        res.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('p');
            item.innerHTML = `${num2} x ${c} = ${num2 * c}`
            res.appendChild(item)
        }

    }
}