let anime = {
    "nome": "akame ga kiil",
    "ano": 2014,
    "categoria": "Gore"
}

//formas de testar se uma propridade está presente no objeto proprio ou herdado

console.log("nome" in anime); // propriedade própria do anime, retorna true
console.log("toString" in anime); // ToString herdado de Object.prototype 
console.log("y" in anime); //propriedade que não própria e nem de um protótipo, retorna false

//==============================================================================================
// verificando se há propriedades próprias no objeto com hasOwnProperty()

console.log(anime.hasOwnProperty("nome")) // retonar true pois é propriedade própria
console.log(anime.hasOwnProperty("toString")) // retorna false pois não é propriedade própria
console.log(anime.hasOwnProperty("y")) // retorna false pois a propriedade não existe 
//==============================================================================================
// verificando se as propriedades próprias são enumeravéis 

console.log(anime.propertyIsEnumerable('nome')); // é uma propridade própria e enumeravél 
console.log(anime.propertyIsEnumerable('y')) // propriedade não existe
console.log(anime.propertyIsEnumerable('toString')) // não é propriedade própria 

//==============================================================================================
// verificando se a propriedade existe 

if(anime.nome !== undefined) { // verifica se a propriedade é estreitamente diferente de undefined
    console.log("tudo ok")
}