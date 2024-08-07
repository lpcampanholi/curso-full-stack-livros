import styled from "styled-components";

export const Titulo = styled.h2`
  color: ${props => props.cor || "#000"};
  background-color: white;
  text-align: center;
  padding: 0.5em;
  margin: 0;
  font-size: ${props => props.tamanhoFonte || "1.5em"};
  text-align: ${props => props.alinhamento || "center"};
`;
