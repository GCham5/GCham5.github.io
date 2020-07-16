import React from 'react';
import pic from '../images/silhouette.png'
import '../css/Creative.css'

const CreativeCards = ({creatives}) => {
    const creativeList = creatives.map(creative => {
        return (
            <div className='card creativeCard' key={creative.id}>
                <div className="card-body">
                    <img className="img-fluid" src={pic}></img>
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