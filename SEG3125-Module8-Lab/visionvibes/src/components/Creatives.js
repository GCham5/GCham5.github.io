import React, { Component } from 'react';
import CreativeCards from './CreativeCards';

class Creatives extends Component {

    state = {
        creatives: [
            { name: 'Georges', genre: 'RnB', key: '0' },
            { name: 'Mark', genre: 'Hip-Hop', key: '1' },
            { name: 'John', genre: 'Trap', key: '2' }
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