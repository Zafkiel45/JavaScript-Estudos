const string = ['eu', 'vou', 'fazer', 'compras'];
console.log(string.join(' '))

/* O método join() serve para transformarr todos os elementos de um array em uma string simples. Os argumentos passado dentro do join() aparecerá seperando os elementos, no caso do exemplo acima ficaria da seguinte forma se eu passasse o seguinte argumento: join('-')*/

// Resultado: "Eu-vou-fazer-compras'. 

//OBS: Espaços também são interpretados dentro do join, portanto podemos apenas da um espaço entre os elementos para que ele não fique colado. 

// OBS-2: Se não passar nenhum argumento, por padrão, todos os elementos serão separados os vírgula.