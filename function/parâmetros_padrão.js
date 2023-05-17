"use strict";

function Default(nome = 'visitante'){
    console.log(nome)
}

Default('Emilly')


/*
    Parâmetros padrões em função é nada mais nada menos que um valor que será usado quando não for fornecido um valor ao argumento. No caso acima, se eu não estivesse passado "Emilly" como parâmetro pro argumento, será mostrado "visitante" no console, ou seja, o valor que é usado quando nenhum valor é passado como parâmetro. 

    OBS: É interessante colocar argumentos com valores padrão no final da lista de argumentos, pois geralmente, quando passamos um valor padrão a um argumento, entende-se que é opcional fornecer um valor ou não, portanto, como os valores são fornecidos em uma sequência, é interessante deixar os valores que queremos que tenham um valor fornecido e por último o argumento opcional. 
*/