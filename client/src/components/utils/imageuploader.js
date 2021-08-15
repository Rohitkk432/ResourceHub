import {React,useState} from 'react';
import './imageuploader.css';
import axios from 'axios';

function Imageuploader() {

    const [img,setImg]=useState({});
    const [label,setLabel]=useState("Upload Image");
    const [input,setInput]=useState(false);

    const uploading=()=>{
        const formData = new FormData();
        formData.append('file',img);
        formData.append('upload_preset', 'tr1angcf');

        axios.post('https://api.cloudinary.com/v1_1/rohitkk432/image/upload', formData)
        .then((res)=>console.log(res.data.secure_url)).catch((err)=>console.log(err))
    }

    const fileprocess =(e)=>{
        if(e.target.files[0].name.includes('.png') || 
        e.target.files[0].name.includes('.jpeg') || 
        e.target.files[0].name.includes('.jpg')){
            setImg(e.target.files[0]);
            setLabel("Uploaded");
            setInput(true);
        }
    }

    return (
        <div>
            <input type="file" id="upload" disabled={input} onChange={fileprocess}  hidden/>
            <label className="fileinput" htmlFor="upload">{label}</label>

            <button onClick={(e)=>{
                e.preventDefault();
                uploading();
            }}>
                UPLOAD
            </button>
        </div>
    )
}

export default Imageuploader;