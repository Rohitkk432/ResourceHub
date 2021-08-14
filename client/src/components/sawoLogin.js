import {React,useEffect} from 'react';

import Sawo from "sawo";

function SawoLogin() {

    var config = {
        // should be same as the id of the container created on 3rd step
        containerID: "sawo-container",
        // can be one of 'email' or 'phone_number_sms'
        identifierType: "email",
        // Add the API key copied from 2nd step
        apiKey: "5ad9aff4-30d1-4ff6-8d76-1a44b5ac71a5",
        // Add a callback here to handle the payload sent by sdk
        onSuccess: (payload) => {console.log(payload);},
    };

    useEffect(()=>{
        let sawo = new Sawo(config);
        sawo.showForm();
    })
    
    return (
        <>
            <div id="sawo-container" style={{height: "300px", width: "300px"}}></div>
        </>
    )
}

export default SawoLogin;