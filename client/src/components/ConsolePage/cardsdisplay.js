import {React,useEffect,useState} from 'react';
import {currentuser} from '../LoginPage/loginpage'
import {getusercards,getcarditems} from '../utils/functions';

function Cardsdisplay() {

    const [cards,setCards]=useState([])

    async function fetchingcards(){
        const _cards = await getusercards(currentuser.id);
        await _cards.map(async(card)=>{
            card.items = await getcarditems(card.id); 
        })
        setCards(_cards);
    }

    useEffect(()=>{
        fetchingcards();
    })

    return (
        <div>
            
        </div>
    )
}

export default Cardsdisplay;