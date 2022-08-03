import '../styles/Infos.scss';
import {useState, useEffect} from "react";
import { RiStarSFill } from 'react-icons/ri';

function Infos({rent}) {
    const rateNumber = [1, 2, 3, 4, 5];
    return (
        <div className="Infos">
            <div className="Infos-left">
                <div className='block-title'>
                    <h1>
                        {rent.title}
                        <span>{rent.location}</span>
                    </h1>
                </div>

                <div className='tags'>
                    {rent.tags.map((tag, index) => {
                        return (
                            <div key={index} className='tag'>
                                {tag}
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="Infos-right">
                <div className='block-profile'>
                    <p className='name'>{rent.host.name}</p>
                    <div className='profile-img'>
                        <img src={rent.host.picture} alt="profile"/>
                    </div>
                </div>

                <div className='block-rate'>
                    {rateNumber.map(number => {
                        return (
                                <RiStarSFill key={number} className={ number <= rent.rating ? 'star colored' : 'star'}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Infos;