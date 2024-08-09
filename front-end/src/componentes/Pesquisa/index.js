import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLivros } from "../../servicos/livros";
import { postFavorito } from "../../servicos/favoritos";
import livroImg from "../../imagens/livro.png"

const Container = styled.section`
  color: white;
  text-align: center;
`;

const Titulo = styled.h2`
  color: white;
  font-size: 2em;
  font-weight: 700;
  text-align: center;
  padding: 0.5em 0;
  margin-top: 0;
`;

const Subtitulo = styled.h3`
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 0.5em;
`;

const LivrosResultado = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  border: 1px solid white;
  border-radius: 0.5em;
  margin: 1em 25%;
  padding: 0.5em 5%;
  cursor: pointer;

  img {
    width: 5em;
  }

`;

function Pesquisa() { 
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [livros, setLivros] = useState([]);

 useEffect(() => {
  fetchLivros();
 }, []);

  async function fetchLivros() {
    const livrosDaAPI = await getLivros();
    setLivros(livrosDaAPI);
    setLivrosPesquisados(livrosDaAPI);
  };

  async function insertFavorito(id) {
    await postFavorito(id);
    alert(`Livro de id:${id} inserido!`);
  };

  return (
    <Container>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input type="text" placeholder="Escreva sua próxima leitura" onChange={(e) => {
        const textoDigitado = e.target.value.toLowerCase();
        const resultadoPesquisa = livros.filter(livro => livro.nome.toLowerCase().includes(textoDigitado));
        setLivrosPesquisados(resultadoPesquisa);
      }}/>
      { livrosPesquisados.map( (livro, i) => (
        <LivrosResultado key={i} onClick={() => insertFavorito(livro.id)}>
          <img src={livroImg} alt="capa do livro" />
          <p>{livro.nome}</p>
        </LivrosResultado>
      ) ) }
    </Container>
  );
};

export default Pesquisa;
