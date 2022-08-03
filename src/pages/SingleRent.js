import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import Data from "../components/data.json";
import '../styles/SingleRent.scss';

import Slider from '../components/Slider';
import Infos from '../components/Infos';
import Collapse from "../components/Collapse";


function SingleRent() {
    const [rent, setRent] = useState({pictures: [], tags: [], host: {}});
    let {id} = useParams();

    useEffect(() => {
        let rent = Data.find(rent => rent.id === id);
        setRent(rent);
    }, []);
    return (
        <div className={'SingleRent'}>
            <Slider rent={rent}/>
            <Infos rent={rent}/>
            <div className={'Collapses'}>
                <Collapse header='Description' body={rent.description}/>
                <Collapse header='Équipements' body={rent.equipments}/>
            </div>
        </div>
    )
}

export default SingleRent;