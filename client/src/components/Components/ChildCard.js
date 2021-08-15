import React from "react";
import "./Card5.css";

const ChildCard = (props) => {
  return (
    <div className="child">
      <div className="image">
        <img src={props.image} alt={`From ${props.image}`}></img>
      </div>
      <div className="text">
        <div className="Black-text">{props.title}</div>
        <div className="URL"> {props.link} </div>
      </div>
    </div>
  );
};

export default ChildCard;
