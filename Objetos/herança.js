let num = {r:1};
let c = Object.create(num) // herda as propriedades de num
c.y = 10
let j = Object.create(c) // herda as propriedades de c
j.y = 20

/* 

Os objetos herdam propriedades de outros objetos, porém quando um objeto herda uma propriedade "x" de um outro objeto, e queremos que o valor "x" no objeto atual seja um valor deferente do seu protótipo, basta declarar a propriedade normalmeente como visto acima. 

O objeto "J" herda de "C" a propriedade "y" que vale 10, depois eu declarei a propriedade "Y" também no "J", assim o "j" anula o valor que foi herdado de "C".

OBS: O valor de "Y" no "j" e no "c" tem valores diferentes. O que significa que anula o valor herdado e não altera o valor que foi herdado. Portantom, tenha isso em mente.

*/

console.log(c.y)
console.log(j.y)
console.log(c.r);