const { getTodosLivros, getLivroPorId, inserirLivro, atualizaLivroPorId, deletaLivroPorId } = require("../servicos/livro.js");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.status(200).send(livros);
  } catch(error) {
    res.status(500).send(error.message);
  };
};

function getLivro(req, res) {
  try {
    const { id } = req.params;
    if (id && Number(id)) {
      const livro = getLivroPorId(id);
      res.status(200).send(livro);
    } else {
      res.status(422).send("Id inválido");
    };
  } catch(error) {
    res.status(500).send(error.message);
  };
};

function postLivro(req, res) {
  try {
    const novoLivro = req.body;
    if (req.body.nome) {
      inserirLivro(novoLivro);
      res.status(201).send("Livro inserido com sucesso");
    } else {
      res.status(422).send("O campo nome é obrigatório");
    }
  } catch(error) {
    res.status(500).send(error.message);
  };
};

function patchLivro(req, res) {
  try {
    const { id } = req.params;
    if (id && Number(id)) {
      const modificacoes = req.body;
      atualizaLivroPorId(id, modificacoes);
    } else {
      res.status(422).send("Id inválido");
    };
    res.status(200).send("Livro atualizado com sucesso");
  } catch(error) {
    res.status(500).send(error.message);
  };
};

function deleteLivro(req, res) {
  try {
    const { id } = req.params;
    if (id && Number(id)) {
      deletaLivroPorId(id);
      res.status(200).send("Livro deletado com sucesso");
    } else {
      res.status(422).send("Id inválido");
    };
  } catch(error) {
    res.status(500).send(error.message);
  };
};

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro
};
