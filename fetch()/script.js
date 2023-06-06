fetch('https://api.chucknorris.io/jokes/random')
.then(Response => Response.json())
.then(data => {
  console.log(data.value);
}).catch(erro => {
  console.log("Ocorreu um erro" + erro)
})