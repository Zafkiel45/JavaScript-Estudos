const div = document.querySelector('#retorno');

div.addEventListener('click', function evento() {
  const functionArmazen = teste()
  functionArmazen()
})


function teste() {
  return function retornado() {
    console.log('Retornei uma função!')
  }
}