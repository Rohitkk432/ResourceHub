import React from 'react';
import './datatype.css';

function Datatype1() {
    return (
        <div id="card" className="datatype1">
            <div className="cardimage"></div>
            <div className="carditems">
                <div className="cardtitle">Internet Fundamentals</div>
                <div className="iteminfo">
                    <a href="#card" className="infolinks">http://example.net/</a>
                    <a href="#card" className="infolinks">https://www.example.com/bath/actor</a>
                </div>
                <div className="buttons">
                    <button className="expandbtn">Expand</button>
                    <button className="editbtn">Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Datatype1;