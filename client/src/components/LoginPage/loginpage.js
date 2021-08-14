import React from "react";
import "./loginpage.css";
import Design from "./Group 39.svg";
// import sawoLogin from "./sawoLogin.js";
import { useEffect } from "react";
import Sawo from "sawo";

function Loginpage() {
  var config = {
    // should be same as the id of the container created on 3rd step
    containerID: "sawo-container",
    // can be one of 'email' or 'phone_number_sms'
    identifierType: "email",
    // Add the API key copied from 2nd step
    apiKey: "5ad9aff4-30d1-4ff6-8d76-1a44b5ac71a5",
    // Add a callback here to handle the payload sent by sdk
    onSuccess: (payload) => {
      console.log(payload);
    },
  };

  useEffect(() => {
    let sawo = new Sawo(config);
    sawo.showForm();
  });

  return (
    <div className="login-page">
      <div className="left">
        <h2>
          Welcome to <span className="resource"> ResourceHUB </span>
        </h2>
        <h1>Login</h1>
        <div
          id="sawo-container"
          style={{ height: "300px", width: "300px" }}
        ></div>
        <p>
          Copyright © 2020 <span className="resource"> ResourceHUB </span> All
          rights reserved.
        </p>
      </div>

      <div className="right">
        <img src={Design} alt=""></img>
      </div>
    </div>
  );
}

export default Loginpage;
