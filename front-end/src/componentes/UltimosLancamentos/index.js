import styled from "styled-components";
import { livros } from "./dadosUltimosLancamentos.js";
import { Titulo } from "../Titulo";
import Card from "../Card/";
import imagemAngular from "../../imagens/livro2.png";


const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ddd;
`;

const ContainerLivros = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  padding: 0 3em;
  margin: 1em;
`;

const Livro = styled.div`
  text-align: center;
  width: 30%;
`;

function UltimosLancamentos() {
  return (
    <Container>
      <Titulo cor="#EB9B00">ÚLTIMOS LANÇAMENTOS</Titulo>
      <ContainerLivros>
        {livros.map(livro => (
          <Livro>
            <img src={livro.src} alt="livro"/>
            <p>{livro.nome}</p>
          </Livro>
          ))}
      </ContainerLivros>
      <Card
        titulo="Talvez você se interesse por..."
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação integrada com a plataforma Google"
        src={imagemAngular}
      />
    </Container>
  );
};

export default UltimosLancamentos;
