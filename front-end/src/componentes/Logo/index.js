import logo from "../../imagens/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  gap: 0.3em;
  font-size: 30px;
`;

function Logo() {
  return (
    <LogoContainer>
      <img src={logo} alt="Logo da imagem"/>
      <p>Universo<strong>Literário</strong></p>
    </LogoContainer>
  );
};

export default Logo;
