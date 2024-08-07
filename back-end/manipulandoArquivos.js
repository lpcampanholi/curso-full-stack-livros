const fs = require("fs");

const dados = JSON.parse(fs.readFileSync("livros.json"));

const novoDado = { id: "3", nome: "Livro mais que demais" };

fs.writeFileSync("livros.json", JSON.stringify([...dados, novoDado]));

console.log(JSON.parse(fs.readFileSync("livros.json")));


