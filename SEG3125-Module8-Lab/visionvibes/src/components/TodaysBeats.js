import React, { Component } from 'react';
import BeatCard from './BeatCard';
import beatsData from '../data/beatsData';
import langData from '../data/language'

const TodaysBeats = () => {

    const lang = langData['lang'];

    const reducedBeats = beatsData.slice(0, 3)

    return (

        <div className=" container-fluid">
            <h1>{lang === "EN" ? "Today's Beats" : "Les beats d'aujourd'hui"}</h1>
            <div className="container ">
                <div className="row subSection">
                    <BeatCard beats={reducedBeats} />
                </div>
            </div>
        </div>
    )
}


export default TodaysBeats