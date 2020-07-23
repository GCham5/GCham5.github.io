import React, { Component } from 'react';
import CreativeCards from '../components/CreativeCards';
import creativeData from '../data/creativesData';
import { withRouter, useHistory } from "react-router-dom";
import langData from '../data/language';

const TodaysCreatives = () => {

    const history = useHistory();
    const lang = langData['lang'];

    const showProfile = (creative) => {
        history.push("/profile", {
            creativeToShow: creative
        })
    }
        const reducedCreatives = creativeData.slice(0, 3)
        return (
            <div className="container-fluid">
                <h1>{lang === "EN" ? "Today's Creatives" : "Créations d'aujourd'hui"}</h1>
                <div className="container subSection">
                    <CreativeCards creatives={reducedCreatives} showProfile={showProfile} />
                </div>
            </div>
        )
    }


export default withRouter(TodaysCreatives)