import white_logo from '../images/white_logo.svg';
import '../styles/Footer.scss';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <Link to={'/'}>
                <div className="logo-container">
                    <img className="logo" src={white_logo} alt="logo"/>
                </div>
            </Link>
            <div className="copyright">
                <p>© 2020 Kasa. All rights reserved</p>
            </div>

        </footer>
    )
}

export default Footer;