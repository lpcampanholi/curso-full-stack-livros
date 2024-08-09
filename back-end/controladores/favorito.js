const { getTodosFavoritos, inserirFavorito, deletarFavoritoPorId } = require("../servicos/favorito.js");

function getFavoritos(req, res) {
  try {
    const favoritos = getTodosFavoritos();
    res.status(200).send(favoritos);
  } catch(error) {
    res.status(500).send(error.message);
  };
};

function postFavorito(req, res) {
  try {
    const { id } = req.params;
    inserirFavorito(id);
    res.status(201).send("Livro favoritado com sucesso");
  } catch(error) {
    res.status(500).send(error.message);
  };
};

function deleteFavorito(req, res) {
  try {
    const { id } = req.params;
    if (id && Number(id)) {
      deletarFavoritoPorId(id);
      res.status(200).send("Livro deletado com sucesso");
    } else {
      res.status(422).send("Id inválido");
    };
  } catch(error) {
    res.status(500).send(error.message);
  };
};

module.exports = {
  getFavoritos,
  postFavorito,
  deleteFavorito
};
