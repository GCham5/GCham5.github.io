import React from 'react';
import pic from '../images/music-soundwave.png'

const BeatCard = ({beats}) => {
    const beatsList = beats.length ? (
        beats.map(beat => {
        return (
            <div className="card beat" key={beat.id}>
                <div className="card-body">
                    <img className="beatPic" src={pic}></img>
                    <h4 className="card-title">{beat.title}</h4>
                    <h6 className="card-title">{beat.by}</h6>
                    <p className="card-text">{beat.genre}</p>
                </div>

            </div>
        )
    })
    ) :
    <p>No beats found :(... Try changing your preferences!</p>

    return(
        <div className="card-group beatGroup">
            {beatsList}
        </div>
    )
}

export default BeatCard;