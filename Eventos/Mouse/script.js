var movimento = document.getElementById('mouse-enter');
var saiu = document.getElementById('mouse-out');
var entrou = document.getElementById('mouse-move');
var filho = document.getElementById('mouse-over');
var clicou = document.getElementById('mouse-click')
var duble_click = document.getElementById('mouse-dblclick')
var saiu_2 = document.getElementById('mouse-leave');
var up = document.getElementById('mouse-up')
var mouse_direito = document.getElementById('mouse-right')

movimento.addEventListener('mousemove', moveu);
saiu.addEventListener('mouseout' , saiuu);
entrou.addEventListener('mousemove', movimentoo);
filho.addEventListener('mouseover' , filhote);
clicou.addEventListener('click' , click);
duble_click.addEventListener('dblclick' , click_duplo);
saiu_2.addEventListener('mouseleave' , saiu_other);
up.addEventListener('mouseup', soltou);
mouse_direito.addEventListener('contextmenu' , direito)

//Nome de funções não pode ser o mesmo de uma variável. 

function moveu(){
    movimento.style.backgroundColor ='blue'
    //ativado ao entrar no elemento
}

function saiuu(){
    saiu.style.backgroundColor = '#F55FC1'
    //ativado ao sair do elemento
}

function movimentoo(){
    entrou.style.backgroundColor = 'red'
    entrou.innerHTML = 'Mudou'
    //ativado ao se movimentar o curso no elemento
}

function filhote(){
    filho.style.backgroundColor = 'Black'
    //Ativado ao entrar em um elemento do pai
}

function click(){
    clicou.style.backgroundColor = 'Yellow'
    clicou.innerHTML = 'Mudou'
    //ativado ao clicar uma vez
}

function click_duplo(){
    duble_click.style.backgroundColor = 'purple'
    //Ativado ao clicar duas vezes
}

function saiu_other(){
    saiu_2.style.backgroundColor = '#D4A05F'
    //ativado ao sair do elemento filho de um pai 
}

function soltou(){
    up.style.backgroundColor = '#5DD453'
    //ativado ao soltar o botão esquerdo do mouse
}

function direito(){
    mouse_direito.style.backgroundColor = 'yellowgreen'
    //ativado ao clicar com o botão direito do mouse
}