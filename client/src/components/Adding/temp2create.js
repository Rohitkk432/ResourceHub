import {React,useState,useEffect} from 'react';
import './tempcreate.css';

function Temp2create() {

    const [items,setItems]=useState([]);
    
    function dummy(){
        const _items=[
            {   
                "title":'Add heading/text',
                "link":'Add text/link'
            },
            {   
                "title":'Add heading/text',
                "link":'Add text/link'
            },
            {   
                "title":'Add heading/text',
                "link":'Add text/link'
            }
        ];
        setItems(_items);
    }

    useEffect(()=>{
        dummy();
    },[])

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
            <div className="cardtitle2">{'okkkkk'}</div>

            {   
                items?.map((_data,idx)=>{
                    console.log(items);
                    return(
                        <div key={idx} >
                            <Carditem title={_data.title} url={_data.link}/>
                        </div>
                    )
                })
            }

            <div className="buttons2">
                <button className="btn1">Expand</button>
                <button className="btn2">Edit</button>
            </div>
        </div>
    )
}

export default Temp2create;