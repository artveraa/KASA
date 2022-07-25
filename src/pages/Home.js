import HomeBanner from "../components/HomeBanner";
import Data from "../components/data.json";
import RentCard from "../components/RentCard";
import '../styles/Home.scss';

function Home() {
    return (
        <div className="Home">
            <HomeBanner/>
            <div className="Rents">
                {
                    Data.map(rent =>  <RentCard key={rent.id} rent={rent} />)
                }
            </div>
        </div>
    )
}

export default Home;