import Logo from "./Logo";
import OpcoesHeader from "./OpcoesHeader";
import IconesHeader from "./IconesHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <Link to="/"><Logo /></Link>
      <OpcoesHeader />
      <IconesHeader />
    </Container>
  );
};

export default Header;
