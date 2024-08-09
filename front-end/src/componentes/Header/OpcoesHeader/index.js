import styled from "styled-components";
import { Link } from "react-router-dom";

const Opcoes = styled.ul`
  display: flex;
  gap: 3em;
`;

const textoOpcoes = ["Categorias", "Favoritos", "Estante"];

const Opcao = styled.li`
  cursor: pointer;
`;

function OpcoesHeader() {
  return (
    <Opcoes>
    { textoOpcoes.map( (texto, i) => (
      <Link key={i} to={`/${texto.toLocaleLowerCase()}`}><Opcao><p>{texto.toUpperCase()}</p></Opcao></Link>
    ))}
  </Opcoes>
  );
};

export default OpcoesHeader;
