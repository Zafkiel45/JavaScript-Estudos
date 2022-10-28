function calcular(){
    let num = document.getElementById('multiplication');
    let res = document.getElementById('res');

    if(num.value.length == 0){
        alert('Verifique os dados e tente novamente!')
    } else {
        let n = Number(num.value);
        res.innerHTML = ''
        for(let x = 1; x <= 10; x++){
            var item = document.createElement('p');
            item.innerHTML = `${n} x ${x} = ${n * x}`
            res.appendChild(item)
        }
    }
}