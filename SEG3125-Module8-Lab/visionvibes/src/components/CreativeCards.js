import React from 'react';

const CreativeCards = ({creatives}) => {
    const creativeList = creatives.map(creative => {
        return (
            <div className='card creative' key={creative.id}>
                <div className="card-body">
                    <h5 className="card-title">{creative.name}</h5>
                    <p className="card-text">{creative.genre}</p>
                    <br/>
                    <button>View</button>
                </div>
            </div>
        )
    })

    return(
        <div className="card-group subSection">
            {creativeList}
        </div>
        
    )

}

export default CreativeCards;