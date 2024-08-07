const express = require("express");
const rotaLivro = require("./rotas/livro.js");

const app = express();

app.use("/livros", rotaLivro);

const port = 8000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
