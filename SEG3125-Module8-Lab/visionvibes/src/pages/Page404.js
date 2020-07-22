import React from 'react';
import '../css/Page404.css'

// Inspired from https://medium.com/@leonardobrunolima/react-tips-handling-404-pages-24d27191a8dd
const Page404 = ({ location }) => (
    <div className="mainContainer p404Content">
        <div className="mainImage p404BG" >
            <div className="mainText">
                <h1 className="display-4">404 :/</h1>
                <h2>No match found for <code>{location.pathname}</code></h2>
                <h2>Looks like that page doesn't exist! Please use the Navbar above to go back.</h2>
            </div>
        </div>
       
    </div>
);

export default Page404;