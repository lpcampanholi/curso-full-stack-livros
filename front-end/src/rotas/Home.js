import styled from "styled-components";
import Pesquisa from "../componentes/Pesquisa";
import UltimosLancamentos from "../componentes/UltimosLancamentos";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`;

function Home() {
  return (
    <Container>
      <Pesquisa />
      <UltimosLancamentos />
    </Container>
  );
};

export default Home;
