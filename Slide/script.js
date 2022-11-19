const container = document.getElementById('container');
const img = document.querySelectorAll('#container img');
var idx = 0;

function carrosel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    container.style.transform = `translateX(${-idx * 300}px)`
}

setInterval(carrosel, 1800);