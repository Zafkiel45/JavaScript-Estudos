const prototipo = {
  nomeAnime() {
    return console.log(this.nome)
  }
}

const Anime = Object.create(prototipo);
Anime.nome = 'akame ga kill';

Anime.nomeAnime()