import React, { Component } from 'react';
import CreativeCards from '../components/CreativeCards';
import creativeData from '../data/creativesData';
import Profile from './Profile';
import { useHistory } from 'react-router-dom';
import langData from '../data/language';


const Creatives = () => {

    const history = useHistory();
    const lang = langData['lang'];

    const showProfile = (creative) => {
        history.push("/profile", {
            creativeToShow: creative
        })
    }

    return (
        <div className="container-fluid creativeMain mainContainer">
            <div className="mainImage creativeBG" >
                <div className="mainText">
                    <h1 className="display-4">{lang === "EN" ? "Creatives" : "Créatifs"}</h1>
                </div>
            </div>
            <hr></hr>
            <div className="container creativesContent">
                <CreativeCards creatives={creativeData} showProfile={showProfile} />
            </div>
        </div>
    )
}

export default Creatives