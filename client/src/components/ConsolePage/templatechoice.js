import React from 'react';
import './templatechoice.css';

//components
import Datatype1 from './datatype1';
import Datatype2 from './datatype2';

//material Ui icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Templatechoice(params) {

    const [create,setCreate]=params.hide;

    return (
        <div className='templatechoice'>
            <div className="pageinfo">
                <div className="pageinfotitle">Choose Template</div>
                <div className="arrowicon">
                    <ArrowBackIcon onClick={()=>setCreate(!create)} />
                </div>
            </div>
            <div className="templates">
                <div className="template temp1">
                    <Datatype1 data={"Add Title"} dataid={false}/>
                </div>
                <div className="template temp2">
                    <Datatype2 data={"Add Title"} dataid={false}/>
                </div>
            </div>
        </div>
    )
}

export default Templatechoice;