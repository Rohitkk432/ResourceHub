import React from 'react';
import './landingpage.css';

//components
import Nav from './nav';
import Poster from './poster';

function Landingpage() {
    return (
        <div className="landingpage">
            <Nav/>
            <Poster/>
        </div>
    )
}

export default Landingpage;