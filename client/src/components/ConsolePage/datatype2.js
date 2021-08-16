import {React,useEffect,useState,useCallback} from 'react';
import './datatype.css';
import {getcarditems} from '../utils/functions';

function Datatype2(params) {

    const [items,setItems]=useState([]);
    const title=params.data;

    const fetchingitems = useCallback(async()=>{
        const _items = await getcarditems(params.dataid);
        setItems(_items);
    },[params.dataid])

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
        if(params.dataid){
            fetchingitems();
        }
        else{
            dummy();
        }
    },[params.dataid,fetchingitems])

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
            <div className="cardtitle2">{title}</div>

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

            {/* can add multiple items */}
            {/* <Carditem title={'HTML playlist'} url={'www.freecodecamp.com'}/> */}
            {/*------------------------*/}

            <div className="buttons2">
                <button className="expandbtn">Expand</button>
                <button className="editbtn">Edit</button>
            </div>
        </div>
    )
}

export default Datatype2;