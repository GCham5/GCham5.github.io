import React, { Component } from 'react';
import CreativeCards from '../components/CreativeCards';
import creativeData from '../data/creativesData';
import Profile from './Profile'


class Creatives extends Component {

    state = {
        creatives: creativeData,
        showProfileModal: false,
        creativeToShow: null
    }

    showProfile = (creative) => {
        this.setState({
            showProfileModal: !this.state.showProfileModal,
            creativeToShow: creative
        })
    }


    render() {
        return (
            <div className="container-fluid">
                <h1>Creatives</h1>
                <div className="container">
                    <CreativeCards creatives={this.state.creatives} showProfile={this.showProfile} />
                    {this.state.showProfileModal && <Profile creative={this.state.creativeToShow} />}
                </div>
            </div>
        )
    }
}

export default Creatives