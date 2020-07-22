import React, { Component } from 'react';
import CreativeCards from '../components/CreativeCards';
import creativeData from '../data/creativesData';
import { withRouter } from "react-router-dom";

class TodaysCreatives extends Component {
    state = {
        creatives: creativeData,
        creativeToShow: null
    }

    showProfile = (creative) => {
        this.props.history.push("/profile", {
            creativeToShow: creative
        })
    }

    render() {
        const reducedCreatives = creativeData.slice(0, 3)
        return (
            <div className="container-fluid">
                <h1>Today's Creatives</h1>
                <div className="container subSection">
                    <CreativeCards creatives={reducedCreatives} showProfile={this.showProfile} />
                </div>
            </div>
        )
    }
}

export default withRouter(TodaysCreatives)