var movimento = document.getElementById('mouse-enter');
var saiu = document.getElementById('mouse-out');
var entrou = document.getElementById('mouse-move');
var filho = document.getElementById('mouse-over');
var clicou = document.getElementById('mouse-click')
var duble_click = document.getElementById('mouse-dblclick')
var saiu_2 = document.getElementById('mouse-leave');
var up = document.getElementById('mouse-up')

movimento.addEventListener('mousemove', moveu);
saiu.addEventListener('mouseout' , saiuu);
entrou.addEventListener('mousemove', movimentoo);
filho.addEventListener('mouseover' , filhote);
clicou.addEventListener('click' , clicou);
duble_click.addEventListener('dblclick' , click_duplo);
saiu_2.addEventListener('mouseleave' , saiu_other);
up.addEventListener('mouseup', soltou);

//Nome de funções não pode ser o mesmo de uma variável. 

function moveu(){
    movimento.style.backgroundColor ='blue'
}

function saiuu(){
    saiu.style.backgroundColor = '#F55FC1'
}

function movimentoo(){
    entrou.style.backgroundColor = 'red'
    entrou.innerHTML = 'Mudou'
}