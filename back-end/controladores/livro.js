function getLivros(req, res) {
  try {
    res.send("Olá mundo dos livros");
  } catch(error) {
    res.status(500).send(error.message);
  };
};

module.exports = {
  getLivros
};
