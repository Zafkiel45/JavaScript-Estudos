const promesa = new Promise((resolve, reject) => {
    let nome = "Murilo" 

    if(nome === "Murilo") {
        resolve("Tudo certo")
    } else {
        reject("ERRO")
    }
})

promesa.then((dados) => {
    console.log(dados)
})

// Acima está o exemplo da criação de uma promise, que funciona como uma promesa na vida real. Uma promesa espera um valor, que pode ser "resolve" em caso de sucesso, ou reject em caso de falha. Adicionamos uma determinada ação para ambos os casos. No caso acima, a promise verifica se o "nome" é "Murilo", apresentando no console a instrução correspondente. 

// O "Then" é uma é usado em casos de sucesso, realizando uma ação determina instrução, porém mesmo a promise falhando, retorna um erro no console. 

const promesa1 = new Promise((resolve, reject) => {
    let nome = "Kelly" 

    if(nome === "Murilo") {
        resolve("Tudo certo")
    } else {
        reject("ERRO")
    }
})

promesa1.catch((dados) => {
    console.log("Ops... Deu Algo errado " + dados)
})

// Utilizamos cath para tratar de erros. O erro no console é apresentando diferente do "then". 


const promesa2 = new Promise((resolve, reject) => {
    let nome = "Kelly" 

    if(nome === "Murilo") {
        resolve("Tudo certo")
    } else {
        reject("ERRO")
    }
})

promesa2.then((dados) => {
    return dados.toLowerCase()
}).catch((error) => {
    console.log(error)
})

// é possível encader muitos "then" para fazer uma determina formatação, ou alteração extra. não é possível encader muitos cath seguidos como o "then".

const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("TIME OUT")
    }, 3000)
})

const promesa4 = new Promise((resolve, reject) => {
    let nome = "Murilo" 

    if(nome === "Murilo") {
        resolve("Tudo certo")
    } else {
        reject("ERRO")
    }
})

const promesa5 = new Promise((resolve, reject) => {
    let nome = "Murilo" 

    if(nome === "Murilo") {
        resolve("Tudo certo")
    } else {
        reject("ERRO")
    }
})

let TodasAsPromessas = Promise.all([promesa3,promesa4,promesa5]);

TodasAsPromessas.then((data) => {
    console.log(data)
})

console.log('Assync')

// No caso acima utilizamos um método diferente do "new Promise". O Promise.all([]) recebe um array de promises, e verifica se todas elas foram concluídas, quando forem, mostra o resultado no console, por exemplo. Adiciocei um TimeOut() para a primeira promise ser conluída após 3 segundos. Também serve de exemplo, pois promises são assicrónas. Por tanto o último console log aparece antes das promisses aparecer e não depois, pois as promises trabalham em paralelo. 


const promesa6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("TIME OUT")
    }, 3000)
})

const promesa7 = new Promise((resolve, reject) => {
    let nome = "Murilo" 

    if(nome === "Murilo") {
        resolve("Tudo 7")
    } else {
        reject("ERRO")
    }
})

const promesa8 = new Promise((resolve, reject) => {
    let nome = "Murilo" 

    if(nome === "Murilo") {
        resolve("Tudo certo")
    } else {
        reject("ERRO")
    }
})

let TodasAsPromessasRice = Promise.race([promesa6,promesa7,promesa8]);

TodasAsPromessasRice.then((data) => {
    console.log(data)
})

// funciona da mesma forma que o Promise.All, porém o Promise.race() retorna a primeira promesa que for concluída, na ordem. Se as promesas tiverem a mesma velocidade de conclusão, a primeira promesa na ordem é a que é retornanda. 