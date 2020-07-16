import React, { Component } from 'react';
import CreativeCards from '../components/CreativeCards';
import creativeData from '../data/creativesData';
import Profile from './Profile'


class Creatives extends Component {

    state = {
        creatives: creativeData,
        showProfileModal: false,
        id: 0
    }

    showProfile = (id) => {
        this.setState({
            showProfileModal: !this.state.showProfileModal,
            id: id
        })
    }

    getComponent(){
        if (this.state.showProfileModal) {
            return <Profile id={this.state.id}/>
        }else{
            return null;
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Creatives</h1>
                <div className="container">
                    <CreativeCards creatives={this.state.creatives} showProfile={this.showProfile}/>
                    {this.getComponent}
                </div>
            </div>
        )
    }
}

export default Creatives