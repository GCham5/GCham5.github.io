import React, { Component } from 'react';
import BeatCard from '../components/BeatCard';
import FindABeat from '../components/FindABeat';
import '../css/Beat.css'

class Beats extends Component {

    state = {
        beats: [
            { title: 'Next', by:'Illangelo', genre: 'RnB', mood:'Sad', BPM: 87, key: 'E Major', id: 0 },
            { title: 'Water', by:'Kanye', genre: 'Hip-Hop', mood:'Happy', BPM: 100, key: 'C Major', id: 1 },
            { title: 'Overdue', by:'Metro', genre: 'Trap', mood:'Motivated', BPM: 168, key: 'F# Major', id: 2 },
            { title: 'Jaded', by:'40', genre: 'RnB', mood:'Sad', BPM: 87, key: 'E Minor', id: 3 },
            { title: 'Swtich', by:'Metro', genre: 'RnB', mood:'Relaxed', BPM: 96, key: 'C Minor', id: 4 },
            { title: 'D.D', by:'Illangelo', genre: 'Rock', mood:'Motivated', BPM: 111, key: 'A Major', id: 5 },
            { title: 'Caravan', by:'MounVibe', genre: 'RnB', mood:'Happy', BPM: 120, key: 'C Major', id: 6 }
        ]
    }

    updateBeatList = (genreInfo,moodInfo) => {
        var s1 = document.getElementById(genreInfo);
        var s2 = document.getElementById(moodInfo);

        var checkboxes = s1.getElementsByTagName('input');
        var checkboxes2 = s2.getElementsByTagName('input');
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Beats</h1>
                <FindABeat updateBeatList={this.updateBeatList}/>
                <div className="beatsContainer">
                    <BeatCard beats={this.state.beats} />
                </div>
            </div>
        )
    }
}

export default Beats