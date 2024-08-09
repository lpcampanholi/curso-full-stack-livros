import styled from "styled-components";

const Container = styled.div`
  border-radius: 2em;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  margin: 2em 20%;
  width: 50%;
  background-color: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Titulo = styled.h3`
  color: #EB9B00;
  margin: 0 0 1em 0;
`;

const Subtitulo = styled.h4`
  font-size: 1.5em;
  margin: 0;
`;

const Botao = styled.button`
color: white;
  background-color: #EB9B00;
  border: none;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  cursor: pointer;

  &:hover {
    background-color: #ffb017;
  }
`;

function CardRecomendado({ titulo, subtitulo, descricao, src }) {
  return (
    <Container>
    <img src={src} alt="imagem"/>
    <div>
      <Titulo>{titulo}</Titulo>
      <Subtitulo>{subtitulo}</Subtitulo>
      <p>{descricao}</p>
      <Botao>Saiba mais</Botao>
    </div>
  </Container>
  );
};

export default CardRecomendado;
