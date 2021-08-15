import {React,useEffect,useState} from 'react';
import {currentuser} from '../LoginPage/loginpage'
import {getusercards,getcarditems} from '../utils/functions';

function Cardsdisplay() {

    const [cards,setCards]=useState([])

    async function fetchingcards(){
        console.log(currentuser._id);
        const _cards = await getusercards(currentuser._id);
        await _cards.map(async(card)=>{
            card.items = await getcarditems(card._id); 
        })
        console.log(_cards);
        setCards(_cards);
    }

    useEffect(()=>{
        if(currentuser){
            fetchingcards();
        }
        // console.log(currentuser._id);
    },[])

    return (
        <div>
            
        </div>
    )
}

export default Cardsdisplay;