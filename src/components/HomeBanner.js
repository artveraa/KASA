import '../styles/HomeBanner.scss'
import background from '../images/banner-home.jpg'

function HomeBanner() {
    return (
            <div className="img-container">
                <h1>Chez vous, partout et ailleurs</h1>
                <img className="banner-bg"
                     src={background}
                     alt="banner"/>
            </div>
    );
}

export default HomeBanner;