import HomeBanner from "../components/HomeBanner";
import Data from "../components/data.json";
import RentCard from "../components/RentCard";
import '../styles/Home.scss';
import background from '../images/banner-home.jpg'

function Home() {
    return (
        <div className="Home">
            <HomeBanner title='Chez vous, partout et ailleurs' background={background}/>
            <div className="Rents">
                {
                    Data.map(rent =>  <RentCard key={rent.id} rent={rent} />)
                }
            </div>
        </div>
    )
}

export default Home;