import {React,useState,useEffect,useCallback} from 'react';
import './imageuploader.css';
import axios from 'axios';

//material UI icons
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';

function Imageuploader(params) {

    const [upload,setUpload]=params.upload;
    const [imglink,setImglink]=params.imglink;

    const [img,setImg]=useState({});
    const [label,setLabel]=useState("white");
    const [input,setInput]=useState(false);

    const uploading= useCallback(()=>{
        const formData = new FormData();
        formData.append('file',img);
        formData.append('upload_preset', 'tr1angcf');

        axios.post('https://api.cloudinary.com/v1_1/rohitkk432/image/upload', formData)
        .then((res)=>setImglink(res.data.secure_url)).catch((err)=>console.log(err))
    },[img,setImglink])

    useEffect(()=>{
        if(upload && img){
            uploading();
            setUpload(false);
        };
    },[upload,img,uploading,setUpload])

    const fileprocess =(e)=>{
        if(e.target.files[0].name.includes('.png') || 
        e.target.files[0].name.includes('.jpeg') || 
        e.target.files[0].name.includes('.jpg')){
            setImg(e.target.files[0]);
            setLabel("green");
            setInput(true);
        }
    }

    return (
        <div>
            <input type="file" id="upload" disabled={input} onChange={fileprocess}  hidden/>
            <label style={{'color':`${label}`}} className="fileinput" htmlFor="upload"><BackupOutlinedIcon style={{'fontSize':'3rem'}} /></label>
        </div>
    )
}

export default Imageuploader;