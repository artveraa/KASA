import '../styles/Home.scss';
import RentCard from "./RentCard";
import Data from './data.json';

function Rents() {
    return (
        <div className="Rents">
            {
                Data.map(rent => {
                    return (
                        <RentCard
                            key={rent.id}
                            title={rent.title}
                            cover={rent.cover}
                            id={rent.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default Rents;
