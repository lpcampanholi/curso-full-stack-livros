const fs = require("fs");

function getTodosFavoritos() {
  return JSON.parse(fs.readFileSync("favoritos.json"));
};

function inserirFavorito(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));
  const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));
  const novoLivroFavorito = livros.find(livro => livro.id === id);
  const novaListaFavoritos = [...favoritos, novoLivroFavorito];
  fs.writeFileSync("favoritos.json", JSON.stringify(novaListaFavoritos));
};

function deletarFavoritoPorId(id) {
  const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));
  const livrosFiltrados = favoritos.filter(livro => livro.id !== id);
  fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados));
};

module.exports = {
  getTodosFavoritos,
  inserirFavorito,
  deletarFavoritoPorId
};
