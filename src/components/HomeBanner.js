import '../styles/HomeBanner.scss'


function HomeBanner(props) {
    return (
            <div className="img-container">
                <h1>{props.title}</h1>
                <img className="banner-bg"
                     src={props.background}
                     alt="banner"/>
            </div>
    );
}

export default HomeBanner;