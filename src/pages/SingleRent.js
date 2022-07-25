import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import Data from "../components/data.json";

import Slider from '../components/Slider';


function SingleRent() {
    const [rent, setRent] = useState({pictures: []});
    let {id} = useParams();

    useEffect(() => {
        let rent = Data.find(rent => rent.id === id);
        setRent(rent);
    }, []);


    return (
        <div className={'SingleRent'}>
            <Slider rent={rent} />
        </div>
    )
}

export default SingleRent;