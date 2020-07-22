import React, { Component } from 'react';
import BeatCard from './BeatCard';
import beatsData from '../data/beatsData';
import langData from '../data/language'

class TodaysBeats extends Component {
    state = {
        beats: beatsData,
        // lang: langData['lang']
    }

    lang = langData['lang'];

    // componentWillMount = () =>{
    //     console.log(this.state.lang)

    //     if (this.state.lang === "EN") {
    //         this.setState({
    //           lang: 'FR'
    //         })

    //       } else {
    //         this.setState({
    //           lang: 'EN'
    //         })

    //       }
    // }

    render() {
        const reducedBeats = beatsData.slice(0, 3)
        console.log(this.lang)

        return (

            <div className=" container-fluid">
                <h1>{this.lang === "EN" ? "Today's Beats" : "Les beats d'aujourd'hui"}</h1>
                <div className="container ">
                    <div className="row subSection">
                        <BeatCard beats={reducedBeats} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TodaysBeats