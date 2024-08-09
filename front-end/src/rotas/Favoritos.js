import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFavoritos, deleteFavorito } from "../servicos/favoritos";
import livroImg from "../imagens/livro.png";

const Container = styled.div`
  width: 100vw;
  height: 100vw;
  background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`;

const Titulo = styled.h2`
  color: white;
  font-size: 2em;
  font-weight: 700;
  text-align: center;
  padding: 0.5em 0;
  margin-top: 0;
`;

const Livro = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  border: 1px solid white;
  border-radius: 0.5em;
  margin: 1em 25%;
  padding: 0.5em 5%;
  cursor: pointer;

  p {
    color: white;
  }

  img {
    width: 5em;
  }
`;

const Texto = styled.p`
  color: white;
  text-align: center;
`;

function Favoritos() {

  const [favoritos, setFavoritos] = useState([]);

  // Buscar favoritos na API
  useEffect(() => {
    fetchFavoritos();
  }, []);

  async function fetchFavoritos() {
    const favoritosDaApi = await getFavoritos();
    setFavoritos(favoritosDaApi);
  };

  // Excluir favorito
  async function deletarFavorito(id) {
    await deleteFavorito(id);
    alert(`Livro de ID ${id} deletado`);
    fetchFavoritos();
  };

  return (
    <Container>
      <Titulo>Aqui estão seus livros favoritos:</Titulo>
        {favoritos.length !== 0 ? favoritos.map((favorito, i) => (
          <Livro  key={i} onClick={() => deletarFavorito(favorito.id)}>
            <img src={livroImg} alt="imagem" />
            <p>{favorito.nome}</p>
          </Livro>
        )) : <Texto>Você não possui livros favoritos</Texto>
        }
    </Container>
  );
};

export default Favoritos;
