import React from 'react';
import Landing from '../components/Landing';
import Services from '../components/Services';
import Creatives from '../components/Creatives';



const Home = () => {
    return (
        <div className="Home container-fluid">
            <Landing />
            <Services />
            <Creatives />
        </div>
    )
}

export default Home