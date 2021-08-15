import React from 'react'
import './datatype.css';

function Datatype2() {

    function Carditem(params){
        return(
            <div className="itemcard">
                <div className="itemcardimg"></div>
                <div className="itemcardinfo">
                    <div className="itemcardtitle">{params.title}</div>
                    <a href="#card2" className="itemcardlink">{params.url}</a>
                </div>
            </div>
        )
    }


    return (
        <div id="card2" className="datatype2">
            <div className="cardtitle2">HTML/CSS Fundamentals</div>

            {/* can add multiple items */}
            <Carditem title={'HTML playlist'} url={'www.freecodecamp.com'}/>
            {/*------------------------*/}

            <div className="buttons2">
                <button className="expandbtn">Expand</button>
                <button className="editbtn">Edit</button>
            </div>
        </div>
    )
}

export default Datatype2;