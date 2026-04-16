import { Link } from "react-router-dom";
import "./not-found.css";

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <h1 className="notfound-title">404</h1>

        <p className="notfound-subtitle">
          Página não encontrada
        </p>

        <p className="notfound-text">
          O conteúdo que você está tentando acessar não existe ou foi removido.
        </p>

        <Link to="/" className="notfound-button">
          Voltar para o início
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;