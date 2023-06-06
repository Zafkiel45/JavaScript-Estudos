const teste = new XMLHttpRequest()

teste.onreadystatechange = function() {
  if(this.readyState === 4 && this.status === 200) {
    const posts = JSON.parse(this.responseText);
    console.log(posts);
  }
}

teste.open("GET", 'https://jsonplaceholder.typicode.com/posts', true);
teste.send()

