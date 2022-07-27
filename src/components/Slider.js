import '../styles/Slider.scss';
import {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";


function Slider(props) {
    const [current, setCurrent] = useState(0)
    const length = props.rent.pictures.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(props.rent.pictures) || length <= 0) {
        return null;
    }

    return (
        <div className="Slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {props.rent.pictures.map((slide, index) => {
                return (
                    <div className={`slide ${index === current ? 'active' : ''}`} key={index}>
                        {index === current && <img src={slide} alt="slide"/>}
                    </div>
                )
            })}
        </div>
    )

}

export default Slider;