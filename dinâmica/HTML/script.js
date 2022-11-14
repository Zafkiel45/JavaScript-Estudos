let dino = function(){
`
    <div id="card">
    <ol id="lista-card">
        <li class="item-card">1</li>
        <li class="item-card">2</li>
        <li class="item-card">3</li>
    </ol>
    </div>
    `
}

document.getElementById('principal').innerHTML = `
    ${dino}
`