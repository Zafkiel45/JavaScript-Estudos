const tagElement = document.querySelector('p')

async function FetchData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const converte = await data.json()
    const converteData = document.createTextNode(JSON.stringify(converte))
    tagElement.appendChild(converteData)
}

