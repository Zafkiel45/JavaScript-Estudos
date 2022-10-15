let anime = document.getElementById('container');
anime.addEventListener('click', clicou);
anime.addEventListener('mouseenter' , entrou);
anime.addEventListener('mouseout' , saiu);
anime.addEventListener('mousemove' , moveu);

function clicou() {
    anime.style.backgroundColor = '#A23A28'
    anime.innerText = 'Kurumi'
}

function entrou() {
    anime.style.backgroundColor = '#5FB4F5'
    anime.innerText = 'Esdeath'
}

function saiu() {
    anime.style.backgroundColor = 'pink'
    anime.innerText = 'Zero Two'
    anime.style.height = '200px'
    anime.style.width = '200px'
    anime.style.lineHeight = '200px'
}

function moveu() {
    anime.style.height = '400px'
    anime.style.width = '400px'
    anime.style.lineHeight = '400px'
}