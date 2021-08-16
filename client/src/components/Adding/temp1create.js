import {React,useState,useEffect} from 'react';
import './tempcreate.css';

import {currentuser} from '../LoginPage/loginpage';
import {createcard,createitem} from '../utils/functions'

//components
import Imageuploader from '../utils/imageuploader';

function Temp1create(params) {

    const [create,setCreate]=params.create;
    const [creation,setCreation]=params.creation;

    const [imglink,setImglink]=useState('');
    const [items,setItems]=useState([]);
    const [title,setTitle]=useState('');
    const [links,setLinks]=useState('');
    const [upload,setUpload]=useState(false);
    
    async function createcardtemp1(){
        await setUpload(true);
        if(imglink!==''){
            const _card = await createcard(currentuser._id,title,'',imglink,'1');
            await links.split(' ').map(async (link)=>{
                createitem(_card._id,'','','',link);
            });
            setCreate(false);
            setCreation(false);
        }
    }

    return (
        <div id="card" className="datatype1">
            <div className="cardimage">
                <Imageuploader upload={[upload,setUpload]} imglink={[imglink,setImglink]} />
            </div>
            <div className="carditems">
                <div className="cardtitle">
                    <input className="titleinput"
                    onChange={(e)=>setTitle(e.target.value)}
                    type="text" placeholder='Add Title'/>
                </div>
                <div className="iteminfo">
                    <textarea placeholder="add links with a space" class="textinput" type="text"
                    onChange={(e)=>setLinks(e.target.value)}
                    />
                </div>
                <div className="buttons">
                    <button
                    onClick={(e)=>{
                        e.preventDefault();
                        createcardtemp1()
                    }}
                    className="btn2">Create</button>
                </div>
            </div>
        </div>
    )
}

export default Temp1create;