import styled from "styled-components";

const Opcoes = styled.ul`
  display: flex;
  gap: 3em;
`;

const textoOpcoes = ["Categorias", "Favoritos", "Minha estante"];

const Opcao = styled.li`
  cursor: pointer;
`;

function OpcoesHeader() {
  return (
    <Opcoes>
    { textoOpcoes.map( (texto) => (
      <Opcao><p>{texto.toUpperCase()}</p></Opcao>
    ))}
  </Opcoes>
  );
};

export default OpcoesHeader;
