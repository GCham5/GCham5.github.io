import React from 'react';

const BeatCard = ({beats}) => {
    const beatsList = beats.map(beat => {
        return (
            <div className="card beat" key={beat.id}>
                <div className="card-body">
                    <h4 className="card-title">{beat.title}</h4>
                    <h6 className="card-title">{beat.by}</h6>
                    <p className="card-text">{beat.genre}</p>
                </div>

            </div>
        )
    })

    return(
        <div className="beatGroup">
            {beatsList}
        </div>
    )
}

export default BeatCard;