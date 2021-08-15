import React from "react";
import "./Card5.css";

const ChildCard = (props) => {
  return (
    <div className="child">
      <div className="image">
        <img src={props.image} alt={`From ${props.image}`}></img>
      </div>
      <div>
        <div className="Black-text line">{props.title}</div>
        <div className="URL text-bottom line"> {props.link} </div>
      </div>
    </div>
  );
};

export default ChildCard;
