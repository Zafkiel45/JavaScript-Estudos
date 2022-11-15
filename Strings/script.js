var texto = 'test\
teste\
teste'

//Uma string deve ser escritan a mesma linha, mas para que possa colocar uma string em várias linhas, mas que seja exibida na mesma linha, basta colocar o barra como demostrado acima.

//Utiliza-se o \n para quebra de linha

//SEQUÊNCIA DE ESCAPE
var text = 'texto\n pus\n rol\n ouxe\n'
var texto1 = 'tos\ ai ai\ eita'  
console.log(text);
console.log(texto1)

//METÓDOS QUE PODEM SER APLICADO A UMA STRING

let mundo = 'hello, world'

console.log(mundo.charAt(0)) // mostra o primeiro caractere
console.log(mundo.charAt(mundo.length-1)) // mostra o ultimo caractere
console.log(mundo.substring(0,5)) // mostra desde o caracteres especificado até um outro caractere especifícado.
console.log(mundo.slice(-3)) // mostra os últimos caracteres
console.log(mundo.indexOf('d')) // mostra o identificador do caractere
console.log(mundo.lastIndexOf('l')) // mostra a posição do último "L"
console.log(mundo.indexOf('l' , 2)) // posição do primeiro 'l' em ou após 2. 
console.log(mundo.split(',')) // divide em sub strings
console.log(mundo.replace('l', 'L')) // substitui uma letra pela a outra. 
console.log(mundo.toUpperCase())// deixa maiúsculo