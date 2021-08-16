import {React,useEffect,useState,useCallback} from 'react';
import './datatype.css';
import {getcarditems} from '../utils/functions';


function Datatype1(params) {
    
    const [items,setItems]=useState([]);
    const title=params.data;

    const fetchingitems = useCallback(async()=>{
        const _items = await getcarditems(params.dataid);
        setItems(_items);
    },[params.dataid]);

    function dummy(){
        const _items=[
            {
                "link":'Add text/link'
            }
        ];
        setItems(_items);
    }

    useEffect(()=>{
        if(params.dataid){
            fetchingitems();
        }
        else{
            dummy();
        }
    },[params.dataid,fetchingitems])
    
    return (
        <div id="card" className="datatype1">
            <div className="cardimage"></div>
            <div className="carditems">
                <div className="cardtitle">{title}</div>
                <div className="iteminfo">
                    {
                        items?.map((_data,idx)=>{
                            console.log(items);
                            return(
                                <a href="#card" key={idx}  className="infolinks">{_data.link}</a>
                            )
                        })
                    }
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