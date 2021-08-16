import {React,useEffect,useState} from 'react';
import {currentuser} from '../LoginPage/loginpage'
import {getusercards} from '../utils/functions';

import Datatype1 from './datatype1';
import Datatype2 from './datatype2';

function Cardsdisplay() {

    const [cards,setCards]=useState([]);

    async function fetchingcards(){
        const _cards = await getusercards(currentuser._id);
        setCards(_cards);
    }

    useEffect(()=>{
        if(currentuser){
            fetchingcards();
        }
    },[])

    return (
        <div className='cardsdisplay' >
            {   
                cards?.map((_data,idx)=>{
                    if(_data.cardtemplate==='1'){
                        return(
                            <div key={idx}>
                                <Datatype1 data={_data.title} dataid={_data._id}/>
                            </div>
                        )
                    }
                    else if(_data.cardtemplate==='2'){
                        return(
                            <div key={idx}>
                                <Datatype2 data={_data.title} dataid={_data._id}/>
                            </div>
                        )
                    }
                    else{
                        return(
                            <div key={idx}></div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Cardsdisplay;