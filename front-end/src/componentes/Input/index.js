import styled from "styled-components";

const Input = styled.input`
  background: transparent;
  border: 1px solid white;
  border-radius: 2em;
  padding: 0.8em 5em;
  margin: 0.5em;
  color: white;

  &::placeholder {
    color: white;
  }
`;

export default Input;
