import logo from '../images/logo.svg';
import '../styles/Header.scss';
function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>

            <div className="nav-container">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">À propos</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;