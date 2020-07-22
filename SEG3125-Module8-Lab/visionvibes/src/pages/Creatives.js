import React, { Component } from 'react';
import CreativeCards from '../components/CreativeCards';
import creativeData from '../data/creativesData';
import Profile from './Profile';
import { useHistory } from 'react-router-dom';


class Creatives extends Component {

    state = {
        creatives: creativeData,
        showProfileModal: false,
        creativeToShow: null

    }



    showProfile = (creative) => {
        this.props.history.push("/profile", {
            creativeToShow: creative
        })
    }


    render() {
        return (
            <div className="container-fluid creativeMain mainContainer">
                <div className="mainImage creativeBG" >
                    <div className="mainText">
                        <h1 className="display-4">Creatives</h1>
                    </div>
                </div>
                <hr></hr>
                <div className="container creativesContent">
                    <CreativeCards creatives={this.state.creatives} showProfile={this.showProfile} />
                </div>
            </div>
        )
    }
}

export default Creatives