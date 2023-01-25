const text = `
Milly, Milly, Milly
`

//g = Global. Vai verificar todas as expressões regulares, no caso, "Milly".
//i = insensitive. Vai verificar a expressão sem considerar caracteres maiuscúlos ou menuscúlos 

//.test = testa se tem a expressão retornando um valor booleano
//.exec = extrai a expressão regular retornando um objecto array. 
// com paranteses  é possível criar grupos (). cada grupo ganha um index de um array ([0], [1])
// | = siginifica "ou" assim podendo retornar diversas outras expressões caso não encontre a primeira


const teste = /(M|G|I|D|H)(il)(ly)/gi;
const regular = teste.exec(text)[0]
console.log(regular);
console.log(regular[0]);
console.log(regular[1]);
console.log(regular[2]);