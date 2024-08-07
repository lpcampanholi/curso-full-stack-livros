import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const Container = styled.section`
  color: white;
  text-align: center;
`;

const Titulo = styled.h2`
  margin-bottom: 0.2em;
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
  height: 80%;
  margin-left: 15em;
  margin-top: 1em;
  margin-bottom: 1em;

  img {
    width: 5em;
  }

`;

function Pesquisa() { 
  const [livrosPesquisados, setLivrosPesquisados] = useState(livros);

  console.log(livrosPesquisados);

  return (
    <Container>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input type="text" placeholder="Escreva sua próxima leitura" onChange={(e) => {
        const textoDigitado = e.target.value.toLowerCase();
        const resultadoPesquisa = livros.filter(livro => livro.nome.toLowerCase().includes(textoDigitado));
        setLivrosPesquisados(resultadoPesquisa);
      }}/>
      { livrosPesquisados.map( livro => (
        <LivrosResultado>
          <img src={livro.src} alt="imagem da capa do livro" />
          <p>{livro.nome}</p>
        </LivrosResultado>
      ) ) }
    </Container>
  );
};

export default Pesquisa;
