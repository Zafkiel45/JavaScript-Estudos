const container = document.querySelectorAll('.container');
const button = document.querySelector('#button');

button.addEventListener('click', function(){
    const input = parseInt(document.querySelector('#num1').value);
    for(let cont = 0; cont <= 10; cont++){
        const result = document.createElement('p');
        let mult = input * cont;
        container[1].appendChild(result)
        result.innerHTML = `${cont}x${mult}`
    }
})
