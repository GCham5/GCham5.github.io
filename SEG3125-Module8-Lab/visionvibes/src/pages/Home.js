import React from 'react';
import Landing from '../components/Landing';
import Services from '../components/Services';
import Creatives from '../components/Creatives';
import TodaysBeats from '../components/TodaysBeats';
import TodaysCreatives from '../components/TodaysCreatives';
import '../css/Home.css'


const Home = () => {
    return (
        <div className="Home container-fluid mainContainer">
            <Landing />
            <TodaysBeats/>
            <hr></hr>
            <TodaysCreatives/>
        </div>
    )
}

export default Home