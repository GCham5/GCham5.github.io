import React from 'react'
import '../css/Profile.css'
import '../images/40.png'
import { useHistory } from 'react-router-dom';
import CommentSection from '../components/commentSection/CommentSection';

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
                </div>
            </div>
            <div className="row">
                <div className="side">
                    <h2>About {creative.name}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis eu odio in ultricies. Nulla arcu est, posuere eu ligula at, molestie rutrum mauris. Nullam faucibus massa et ex laoreet laoreet. Pellentesque vitae mollis lacus. Fusce dolor risus, euismod at blandit at, pulvinar ac lacus.</p>
                    <h3>Comments</h3>
                    <CommentSection/>
                    {/* <p>Lorem ipsum dolor sit ame.</p>
                    <div className="fakeimg" >Image</div><br />
                    <div className="fakeimg" >Image</div><br />
                    <div className="fakeimg">Image</div> */}
                </div>
                <div className="main">
                    <h2>MY VISION</h2>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis eu odio in ultricies. Nulla arcu est, posuere eu ligula at, molestie rutrum mauris. Nullam faucibus massa et ex laoreet laoreet. Pellentesque vitae mollis lacus. Fusce dolor risus, euismod at blandit at, pulvinar ac lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ac consectetur quam, ac viverra enim. Sed aliquet elementum nunc sit amet aliquet. Praesent ut ultricies diam. Suspendisse vehicula, nibh eget dictum sodales, turpis diam rutrum erat, nec viverra libero dolor vitae sem. Pellentesque condimentum consequat nisl et auctor. Integer aliquet justo ac bibendum volutpat. Maecenas sem ipsum, viverra vitae mollis non, tincidunt ac nulla. Proin interdum facilisis lacus, in egestas elit viverra ac.</p>
                    <br />
                    <h2>SPOTLIGHT</h2>
                    <iframe width="50%" height={166} scrolling="no" frameBorder="no" allow="autoplay" src={creative.src} />

                </div>
            </div >
        </div>

    )
}

export default Profile