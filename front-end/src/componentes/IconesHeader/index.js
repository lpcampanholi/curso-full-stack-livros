import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import styled from "styled-components";

const Icones = styled.ul`
  display: flex;
  gap: 1em;
`;

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <Icones>
    {icones.map((icone) => (
      <li><img src={icone} alt="icone"/></li>
    ))}
  </Icones>
  );
};

export default IconesHeader;
