import React from 'react';
import pic from '../images/silhouette.png'
import '../css/Creative.css'

const CreativeCards = ({creatives, showProfile}) => {
    const creativeList = creatives.map(creative => {
        return (
            <div className='card creative' key={creative.id}>
                <div className="card-body">
                    <img className="img-fluid" src={pic}></img>
                    <h5 className="card-title">{creative.name}</h5>
                    <p className="card-text">{creative.genre}</p>
                    <br/>
                    <button onClick={() => {showProfile(creative.id)}}>View</button>
                </div>
            </div>
        )
    })

    return(
        <div className="d-flex justify-content-around creatives">
            {creativeList}
        </div>
        
    )

}

export default CreativeCards;