let anime = {
    "akame ga kill": {
        "Nome": 'akame ga kill',
        "Ano": '2014',
        "genero": "Gore, Ação",
        "Nota": "10"
    },
    Oreigairu: {
        "Nome": "Oreigairu",
        "Ano": "2012",
        "genero": "Romance, drama",
        "Nota": "10"
    }
}

console.log(anime["akame ga kill"]["Nome"])
console.log(anime["akame ga kill"]["Ano"])
console.log(anime["akame ga kill"]["genero"])
console.log(anime["Oreigairu"]["Nome"])
console.log(Object.getPrototypeOf(anime))


