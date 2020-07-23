import React from 'react';
import langData from '../data/language';

const Landing = () => {

    const lang = langData['lang'];

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="mainText">
                <h1 className="display-4">VisionVibes</h1>
                <p className="lead">{lang === "EN" ? "A Place To Create And Collaborate" : "Un lieu pour créer et collaborer"}</p>
            </div>
        </div>
    )
}

export default Landing