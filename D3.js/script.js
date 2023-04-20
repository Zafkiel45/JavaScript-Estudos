d3.select('p').text('Hello World') // seleciona a tag "p" e muda o texto dentro dela
    .attr('class', 'text'); // adiciona um atributo, onde o primeiro argumento é o nome do atributo e o segundo argumento é o valor desse atributo.
d3.select('body') // seleciona o corpo 
    .append('p') // cria um elemento p e adiciona como filho do corpo
    .text('Testing...') // adiciona texto no "p"
    .style('color', 'red'); // adiciona um style inline onde o primeiro argumento é o nome da propriedade CSS e o segundo argumento o valor dessa propriedade.


//     var canvas = d3.select('body')
//         .append('svg')
//     .attr('width', 500)
//     .attr('height', 500);
// var circle = canvas.append('circle')
//     .attr('cx', 250)
//     .attr('cy', 250)
//     .attr('r', 50)
//     .attr('fill', 'blue');
// var rect = canvas.append('rect')
//     .attr('width', 200)
//     .attr('height', 50)
//     .attr('x', 200)
//     .attr('y', 100)
//     .attr('fill', 'purple');
// var line = canvas.append('line')
//     .attr('x1', 0)
//     .attr('y1', 50)
//     .attr('x2', 400)
//     .attr('y2', 500)
//     .attr('stroke', 'green')
//     .attr('stroke-width', 10)

const matriz = [10,30,50, 60] // cria um array com 3 valores
let width = 500;
let height = 500;
let width_scale = d3.scaleLinear()
    .domain([0,60]) 
    // define o intervalo de 0 a 60. no caso, o valor mínimo será 0 e o máximo 60. esses valores estão diretamente relacionados com a matriz, assim se houver um valor maior que 60, ou menor que 0, será ignorado. vale lembrar que o valores mínimos e máximos podem ser qualquer valor.
    .range([0,width]); 
    //converte os intervalores entre pixels, então basicamente, os valores entre 0 e 60 vai variar entre 0px e 500px para que sempre se encaxe dentro do container.
let colors = d3.scaleLinear()
    .domain([0,60])
    .range(["#A4E1A0", "#3D41E0"])

var canvas = d3.select('body') // seleciona o corpo 
    .append('svg') // cria uma tag "svg" e adiciona como filho no corpo
    .attr('width', width) // especifica a largura
    .attr('height', height); // especifica a altura
let bars = canvas.selectAll('rect') // seleciona todas as tags "rect" 
    .data(matriz) 
    // pega o array e associa os elementos do array aos elementos selecionados pelo o "SelectAll, no caso rect"
    .enter() 
    // como não existe nenhum rect no DOM, então o enter() cria elementos proporcionalmente a quantidade de elementos no array. ou seja, 3 valores no array, cria 3 elementos rect;
        .append('rect') // joga rect como filho de svg 
        .attr('width', function(a){return width_scale(a)}) 
        // especifica a largura e o calor é passado uma função de callback onde o "a" retorna o valor associado do array e multiplica por 10. Semelhante a ForEach()
        .attr('height', 50) // determina a altura
        .attr('y', function(a, b){return b * 100}) 
        // determina o espaçamento entre os elementos (gap) pegando o índice (segundo argumento ("b")) e multiplica o índice por 100.
        .attr('fill', function(x){return colors(x)})