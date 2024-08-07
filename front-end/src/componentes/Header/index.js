import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import styled from "styled-components";

const Container = styled.header`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  padding: 0 5%;
`;

function Header() {
  return (
    <Container>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </Container>
  );
};

export default Header;
