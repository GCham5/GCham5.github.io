import React, { Component } from 'react';
import CreativeCards from '../components/CreativeCards';
import creativeData from '../data/creativesData'

class TodaysCreatives extends Component {
    state = {
        creatives: creativeData
    }

    render() {
        const reducedCreatives = creativeData.slice(0,3)
        return (
            <div className="container-fluid">
                <h1>Today's Creatives</h1>
                <div className="container subSection">
                    <CreativeCards creatives={reducedCreatives} />
                </div>
            </div>
        )
    }
}

export default TodaysCreatives