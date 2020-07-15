import React, { Component } from 'react';
import CreativeCards from './CreativeCards';


class Creatives extends Component {

    state = {
        creatives: [
            { name: 'MounVibe', type: 'Producer', 'Rating': 4, genre: 'RnB', id: '0' },
            { name: 'Kanye', type: 'Producer', 'Rating': 5, genre: 'Hip-Hop', id: '1' },
            { name: 'Illangelo', type: 'Producer', 'Rating': 4.5, genre: 'RnB', id: '2' },
            { name: 'Metro', type: 'Producer', 'Rating': 4.8, genre: 'Trap', id: '3' },
            { name: '40', type: 'Producer', 'Rating': 4.7, genre: 'RnB', id: '4' },
        ]
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Creatives</h1>
                <div className="container ">
                    <CreativeCards creatives={this.state.creatives} />
                </div>
            </div>
        )
    }
}

export default Creatives