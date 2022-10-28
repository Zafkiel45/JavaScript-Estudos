function calcular(){
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passos = document.getElementById('passos');
    let res = document.getElementById('res')

    if(passos.value.length == 0 || passos.value == 0){
        alert('Verifique os dados e tente novamente!')
    } else {
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passos.value);  

        while (i <= f) {

            res.innerHTML += `${i + p}`
        }
    }
}