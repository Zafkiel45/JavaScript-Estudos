var dia = new Date(2010, 0, 1) // No dia 1 do primeiro mês de 2010 
var local = new Date(2010,  0, 1, 17, 30, 0) // Mesmo dia, as 17 horas e 30 minutos ao exatos 0 segundos.

var now = new Date() // Data e hora atual
var sub = dia - now; // Subtração de data com intervalo em millisegundos

var ano = now.getFullYear() //armazena o ano
var Dia = now.getDay() // armazena o dia da semana
var data = now.getDate() //armazena a data 
var hora = now.getHours() //armazena a hora
var minuto = now.getMinutes() // armazena os minutos
var segundos = now.getSeconds() // armazena os segundos
var milisegundos = now.getMilliseconds() // armazena os milisegundos
var Fuso = now.getUTCHours() // armazena a hora dependendo do fuso horário
var num1 = now.toDateString() // escreve a data
var num2 = now.toLocaleDateString() //escreve o local e a data 
var num3 = now.toString() // escreve todas as informações
var num4 = now.toISOString() //escreve a data e hora do fuso horário
var num5 = now.toTimeString() // escreve a hora

console.log(ano)
console.log(Dia)
console.log(data)
console.log(hora)
console.log(minuto)
console.log(segundos)
console.log(milisegundos)
console.log(Fuso)
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)