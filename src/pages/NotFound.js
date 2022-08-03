import '../styles/NotFound.scss';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className={'Notfound-content'}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to={'/'} className={'back-home-link'}>Retourner à la page d'accueil</Link>
    </div>
  );
}

export default NotFound;