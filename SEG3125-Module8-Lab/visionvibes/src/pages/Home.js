import React from 'react';
import Landing from '../components/Landing';
import Services from '../components/Services';
import Creatives from '../components/Creatives';
import TodaysBeats from '../components/TodaysBeats';
import TodaysCreatives from '../components/TodaysCreatives';
import '../css/Home.css'


const Home = () => {
    return (
        <div className="Home container-fluid">
            <Landing />
            <TodaysBeats/>
            <TodaysCreatives/>
        </div>
    )
}

export default Home