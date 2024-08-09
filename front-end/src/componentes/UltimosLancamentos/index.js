import styled from "styled-components";
import { livros } from "./dadosUltimosLancamentos.js";
import { Titulo } from "../Titulo";
import imagemAngular from "../../imagens/livro2.png";
import CardRecomendado from "../CardRecomendado/index.js";


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
        {livros.map((livro, i) => (
          <Livro key={i}>
            <img src={livro.src} alt="livro"/>
            <p>{livro.nome}</p>
          </Livro>
          ))}
      </ContainerLivros>
      <CardRecomendado
        titulo="Talvez você se interesse por..."
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação integrada com a plataforma Google"
        src={imagemAngular}
      />
    </Container>
  );
};

export default UltimosLancamentos;
