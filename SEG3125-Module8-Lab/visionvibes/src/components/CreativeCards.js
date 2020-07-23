import React from 'react';
import pic from '../images/silhouette.png'
import '../css/Creative.css';
import langData from '../data/language';

const CreativeCards = ({creatives, showProfile}) => {

    const lang = langData['lang']

    const creativeList = creatives.map(creative => {
        const pic = require("../images/" + creative.cardPic);
        return (
            <div className='card creative' key={creative.id}>
                <div className="card-body">
                    <img className="img-thumbnail profileThumbnail" src={pic}></img>
                    <h5 className="card-title">{creative.name}</h5>
                    <p className="card-text">{creative.genre}</p>
                    <br/>
                    <button onClick={() => {showProfile(creative)}}>{lang === 'EN' ? 'View' : 'Voir'}</button>
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