import '../styles/Collapse.scss';
import {MdKeyboardArrowUp} from 'react-icons/md';
import {useState, useRef} from "react";

function Collapse(props) {
    const bodyIsArray = (body) => {
        if (Array.isArray(body)) {
            return body.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item}</p>
                    </div>
                )
            }
            )
        } else {
           return <p>{props.body}</p>
        }
    }

    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef();

    return (
        <div className="Collapse">
            <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <h2>{props.header}</h2>
                <MdKeyboardArrowUp className={isOpen ? "collapse-icon" : "collapse-icon rotation"}/>
            </div>
            <div className='content' ref={contentRef} style={isOpen ? {
                height: contentRef.current.scrollHeight + 'px'
            } : {
                height: '0px'
            }}>
                <div className='collapse-body'>
                    {bodyIsArray(props.body)}
                </div>
            </div>
        </div>
    )
}

export default Collapse;