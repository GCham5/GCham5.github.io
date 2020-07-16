import React, { Component } from 'react';
import CreativeCards from '../components/CreativeCards';
import creativeData from '../data/creativesData'


class Creatives extends Component {

    state = {
        creatives: creativeData
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