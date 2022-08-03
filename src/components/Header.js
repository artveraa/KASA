import logo from '../images/logo.svg';
import '../styles/Header.scss';
import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="header">
            <Link to={'/'}>
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>
            </Link>

            <div className="nav-container">
                <ul className="nav">
                    <li className="nav-item home-page">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="nav-item about-page">
                        <Link to="/about">À propos</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;