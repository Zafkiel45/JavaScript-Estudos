d3.select('p').text('Hello World') // seleciona a tag "p" e muda o texto dentro dela
    .attr('class', 'text'); // adiciona um atributo, onde o primeiro argumento é o nome do atributo e o segundo argumento é o valor desse atributo.
d3.select('body') // seleciona o corpo 
    .append('p') // cria um elemento p e adiciona como filho do corpo
    .text('Testing...') // adiciona texto no "p"
    .style('color', 'red'); // adiciona um style inline onde o primeiro argumento é o nome da propriedade CSS e o segundo argumento o valor dessa propriedade.


    var canvas = d3.select('body')
        .append('svg')
    .attr('width', 500)
    .attr('height', 500);
var circle = canvas.append('circle')
    .attr('cx', 250)
    .attr('cy', 250)
    .attr('r', 50)
    .attr('fill', 'blue');
var rect = canvas.append('rect')
    .attr('width', 200)
    .attr('height', 50)
    .attr('x', 200)
    .attr('y', 100)
    .attr('fill', 'purple');
var line = canvas.append('line')
    .attr('x1', 0)
    .attr('y1', 50)
    .attr('x2', 400)
    .attr('y2', 500)
    .attr('stroke', 'green')
    .attr('stroke-width', 10)

const matriz = [10,30,50] // cria um array com 3 valores
var canvas = d3.select('body') // seleciona o corpo 
    .append('svg') // cria uma tag "svg" e adiciona como filho no corpo
    .attr('width', 500) // especifica a largura
    .attr('height', 500); // especifica a altura
let bars = canvas.selectAll('rect') // seleciona todas as tags "rect" 
    .data(matriz) 
    // pega o array e associa os elementos do array aos elementos selecionados pelo o "SelectAll, no caso rect"
    .enter() 
    // como não existe nenhum rect no DOM, então o enter() cria elementos proporcionalmente a quantidade de elementos no array. ou seja, 3 valores no array, cria 3 elementos rect;
        .append('rect') // joga rect como filho de svg 
        .attr('width', function(a){return a * 10}) 
        // especifica a largura e o calor é passado uma função de callback onde o "a" retorna o valor associado do array e multiplica por 10. Semelhante a ForEach()
        .attr('height', 50) // determina a altura
        .attr('y', function(a, b){return b * 100}) 
        // determina o espaçamento entre os elementos (gap) pegando o índice (segundo argumento ("b")) e multiplica o índice por 100. 