import '../styles/Infos.scss';

function Infos(props) {

    return (
        <div className="Infos">
            <div className="Infos-left">
                <div className='block-title'>
                    <h1>
                        {props.rent.title}
                        <span>{props.rent.location}</span>
                    </h1>
                </div>
            </div>

            <div className="Infos-right">
                <div className='block-profile'>
                    {/*<p className='name'>{props.rent.host.name}</p>
                    <div className='profile-img'>

                        <img src={props.rent.host.picture} alt="profile" />
                    </div>*/}
                </div>
            </div>
        </div>
    );
}

export default Infos;