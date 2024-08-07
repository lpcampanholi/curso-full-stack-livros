const fs = require("fs");

function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
};

function getLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));
  const livroBuscado = livros.find(livro => livro.id === id);
  return livroBuscado;
};

function inserirLivro(novoLivro) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));
  const novaListaDeLivros = [ ...livros, novoLivro ];
  fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
};

function atualizaLivroPorId(id, modificacoes) {
  let livros = JSON.parse(fs.readFileSync("livros.json"));
  let indiceLivroBuscado = livros.findIndex(livro => livro.id === id);
  const livroAtualizado = { ...livros[indiceLivroBuscado], ...modificacoes };
  livros[indiceLivroBuscado] = livroAtualizado;
  fs.writeFileSync("livros.json", JSON.stringify(livros));
};

function deletaLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));
  const livrosFiltrados = livros.filter(livro => livro.id !== id);
  fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados));
};

module.exports = {
  getTodosLivros,
  getLivroPorId,
  inserirLivro,
  atualizaLivroPorId,
  deletaLivroPorId
};
