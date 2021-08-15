import React from "react";
import "./Button.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const Card6 = (props) => {
  return (
    <div className={`Button ${props.type}`}>
      {props.icon === "Back" && <KeyboardBackspaceIcon />}
      {props.text}
    </div>
  );
};

export default Card6;
