import '../styles/RentCard.scss';
import { Link } from "react-router-dom";

function RentCard(props) {
    return (
        <Link className="RentCard" key={props.rent.id} to={`/detail/${props.rent.id}`}>
            <h2>{props.rent.title}</h2>
            <img src={props.rent.cover} alt={props.rent.title} />
        </Link>
    )
}

export default RentCard;