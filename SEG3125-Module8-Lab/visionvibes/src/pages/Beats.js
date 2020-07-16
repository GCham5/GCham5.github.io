import React, { Component } from 'react';
import BeatCard from '../components/BeatCard';
import FindABeat from '../components/FindABeat';
import '../css/Beat.css'

class Beats extends Component {

    state = {
        beats: [
            { title: 'Next', by: 'Illangelo', genre: 'RnB', mood: 'Sad', BPM: 87, key: 'E Major', id: 0 },
            { title: 'Water', by: 'Kanye', genre: 'Hip-Hop', mood: 'Happy', BPM: 100, key: 'C Major', id: 1 },
            { title: 'Overdue', by: 'Metro', genre: 'Trap', mood: 'Motivated', BPM: 168, key: 'F# Major', id: 2 },
            { title: 'Jaded', by: '40', genre: 'RnB', mood: 'Sad', BPM: 87, key: 'E Minor', id: 3 },
            { title: 'Swtich', by: 'Metro', genre: 'RnB', mood: 'Relaxed', BPM: 96, key: 'C Minor', id: 4 },
            { title: 'D.D', by: 'Illangelo', genre: 'Rock', mood: 'Motivated', BPM: 111, key: 'A Major', id: 5 },
            { title: 'Caravan', by: 'MounVibe', genre: 'RnB', mood: 'Happy', BPM: 120, key: 'C Major', id: 6 }
        ],

        initialBeats: [
            { title: 'Next', by: 'Illangelo', genre: 'RnB', mood: 'Sad', BPM: 87, key: 'E Major', id: 0 },
            { title: 'Water', by: 'Kanye', genre: 'Hip-Hop', mood: 'Happy', BPM: 100, key: 'C Major', id: 1 },
            { title: 'Overdue', by: 'Metro', genre: 'Trap', mood: 'Motivated', BPM: 168, key: 'F# Major', id: 2 },
            { title: 'Jaded', by: '40', genre: 'RnB', mood: 'Sad', BPM: 87, key: 'E Minor', id: 3 },
            { title: 'Swtich', by: 'Metro', genre: 'RnB', mood: 'Relaxed', BPM: 96, key: 'C Minor', id: 4 },
            { title: 'D.D', by: 'Illangelo', genre: 'Rock', mood: 'Motivated', BPM: 111, key: 'A Major', id: 5 },
            { title: 'Caravan', by: 'MounVibe', genre: 'RnB', mood: 'Happy', BPM: 120, key: 'C Major', id: 6 }
        ]
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('component updated');
    //     console.log(prevState)
    // }

    updateBeatList = (genreInfo, moodInfo) => {
        var s1 = document.getElementById(genreInfo);
        var s2 = document.getElementById(moodInfo);
        var selectedGenres = [];
        var selectedMoods = [];
        var beatsFromMood = [];
        var beatsFromGenre = [];
        var finalBeatsList = [];

        var checkboxes = s1.getElementsByTagName('input');
        var checkboxes2 = s2.getElementsByTagName('input');

        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                console.log(checkboxes[i].value)
                selectedGenres.push(checkboxes[i].value)
            }
        }

        for (var i = 0; i < checkboxes2.length; i++) {
            if (checkboxes2[i].checked) {
                //console.log(checkboxes2[i].value)
                selectedMoods.push(checkboxes2[i].value)
            }
        }


        for (var i = 0; i < this.state.initialBeats.length; i++) {
            const beat = this.state.initialBeats[i];
            for (var x = 0; x < selectedGenres.length; x++) {
                if(beat.genre === selectedGenres[x]){
                    beatsFromGenre.push(beat)
                }   
            }
        }

        // console.log(selectedMoods);
        // const beatsFromGenre = this.state.initialBeats.filter(beat => {
        //     for (var i = 0; i < selectedGenres.length; i++) {
        //         return beat.genre === selectedGenres[i]
        //     }
        // });

        for (var i = 0; i < this.state.initialBeats.length; i++) {
            const beat = this.state.initialBeats[i];
            for (var x = 0; x < selectedMoods.length; x++) {
                if(beat.mood === selectedMoods[x]){
                    beatsFromMood.push(beat)
                }   
            }
        }
        // const beatsFromMood = this.state.initialBeats.filter(beat => {
        //     for (var i = 0; i < selectedMoods.length; i++) {
        //         return beat.mood === selectedMoods[i]
        //     }
        // })

        console.log("Beats from Mood ", beatsFromMood)

        if (beatsFromGenre.length != 0 && beatsFromMood.length != 0) {
            for (var i = 0; i < beatsFromGenre.length; i++) {
                const genreBeat = beatsFromGenre[i];
                for (var x = 0; x < beatsFromMood.length; x++) {
                    if (genreBeat === beatsFromMood[x]) {
                        finalBeatsList.push(genreBeat);
                    }
                }
            }
        } else {
            if (beatsFromGenre.length == 0 && beatsFromMood.length == 0) {
                finalBeatsList = this.state.initialBeats;
            } else {
                finalBeatsList = [...beatsFromGenre, ...beatsFromMood];
            }
        }




        // const finalUniqueBeatsList = [...new Set(finalBeatsList)];

        console.log(finalBeatsList);
        this.setState({
            beats: finalBeatsList
        })


    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Beats</h1>
                <FindABeat updateBeatList={this.updateBeatList} />
                <div className="beatsContainer">
                    <BeatCard beats={this.state.beats} />
                </div>
            </div>
        )
    }
}

export default Beats