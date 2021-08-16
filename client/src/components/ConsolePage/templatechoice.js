import {React,useState} from 'react';
import './templatechoice.css';

//components
import Datatype1 from './datatype1';
import Datatype2 from './datatype2';
import Temp1create from '../Adding/temp1create' ;

//material Ui icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Templatechoice(params) {

    const [create,setCreate]=params.hide;
    const [creation,setCreation]=useState(false);

    return (
        <div className='templatechoice'>
            <div className={(creation)?'wrapper':"hiddd"}>
                <Temp1create create={[create,setCreate]} creation={[creation,setCreation]} />
            </div>
            <div className={(!creation)?'wrapper':"hiddd"}>
                <div className="pageinfo">
                    <div className="pageinfotitle">Choose Template</div>
                    <div className="arrowicon">
                        <ArrowBackIcon onClick={()=>setCreate(!create)} />
                    </div>
                </div>
                <div className="templates">
                    <div
                    onClick={()=>setCreation(true)}  
                    className="template temp1">
                        <Datatype1 data={"Add Title"} dataid={false}/>
                    </div>
                    <div className="template temp2">
                        <Datatype2 data={"Add Title"} dataid={false}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Templatechoice;