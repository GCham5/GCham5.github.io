import React, { Component } from 'react';
import BeatCard from './BeatCard';
import beatsData from '../data/beatsData'

class TodaysBeats extends Component {
    state = {
        beats: beatsData
    }

    render() {
        const reducedBeats = beatsData.slice(0,3)
        return (
            <div className=" container-fluid ">
                <h1>Today's Beats</h1>
                <div className="container ">
                    <div className="row subSection">
                        <BeatCard beats={reducedBeats}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodaysBeats