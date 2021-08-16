import axios from 'axios';

//get all cards
async function getallcards(){
    const resp = await axios.get(`http://localhost:8000/data`)
    .then((res)=>{return res.data}).catch((err)=>console.log(err));
    return resp;
}

//get user collections
async function getusercards(userID){
    const resp = await axios.get(`http://localhost:8000/userdata?userid=${userID}`)
    .then((res)=>{return res.data}).catch((err)=>console.log(err));
    return resp;
}

//get items from cards
async function getcarditems(dataID){
    const resp = await axios.get(`http://localhost:8000/carditems/${dataID}`)
    .then((res)=>{return res.data}).catch((err)=>console.log(err));
    return resp;
}

//creating card
async function createcard(userID,title,description=``,image=``,cardtemplate){
    const resp = await axios.post(`http://localhost:8000/createPost`,{
        userID:`${userID}`,
        title:`${title}`,
        image:`${image}`,
        description:`${description}`,
        cardtemplate:`${cardtemplate}`
    })
    .then((res)=>{return res.data}).catch((err)=>console.log(err));
    return resp;
}

//creating items within card
async function createitem(dataID,title=``,description=``,image=``,link){
    const resp = await axios.post(`http://localhost:8000/createItemPost`,{
        dataID:`${dataID}`,
        title:`${title}`,
        description:`${description}`,
        image:`${image}`,
        link:`${link}`,
    })
    .then((res)=>{return res.data}).catch((err)=>console.log(err));
    return resp;
}


export {getallcards,getusercards,getcarditems,createcard,createitem};
