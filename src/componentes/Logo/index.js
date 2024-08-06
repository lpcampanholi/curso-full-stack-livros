import "./estilo.css";
import logo from "../../imagens/logo.svg";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo da imagem"/>
      <p><strong>Alura</strong>Books</p>
    </div>
  );
};

export default Logo;
