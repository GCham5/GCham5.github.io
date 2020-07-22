import React from 'react'
import '../css/Profile.css'
import '../images/40.png'
import { useHistory } from 'react-router-dom';

const Profile = (props) => {
    const history = useHistory();
    const creative = history.location.state.creativeToShow;
    const image = require("../images/" + creative.img);

    /* Inspired by https://www.w3schools.com/howto/howto_css_hero_image.asp */
    var mainImageStlye = {
        backgroundImage:"linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, 0.5)), url(" + image + ")",
        backgroundPosition:"center",
        backgroundSize:"cover",
        position:"relative"
    }

    return (
        // Inspired from https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_website2
        <div className="profile">
            <div className="mainImage" style={mainImageStlye} >
                <div className="mainText">
                    <h1 className="display-4">{creative.name}</h1>
                    {/* <hr className="my-4" /> */}
                    {/* <p className="lead">Ranked one of Ottawa's Top 10 Barbershops, a fresh cut is guaranteed.</p> */}
                </div>
            </div>
            <div className="row">
                <div className="side">
                    <h2>About {creative.name}</h2>
                    <h5>Photo of me:</h5>
                    <div className="fakeimg">Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    <h3>More Text</h3>
                    <p>Lorem ipsum dolor sit ame.</p>
                    <div className="fakeimg" >Image</div><br />
                    <div className="fakeimg" >Image</div><br />
                    <div className="fakeimg">Image</div>
                </div>
                <div className="main">
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Dec 7, 2017</h5>
                    <div className="fakeimg" >Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <br />
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Sep 2, 2017</h5>
                    <div className="fakeimg">Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <iframe width="50%" height={166} scrolling="no" frameBorder="no" allow="autoplay" src={creative.src} />

                </div>
            </div >
        </div>

    )
}

export default Profile