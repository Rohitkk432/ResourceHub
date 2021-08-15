import React from "react";
import "./Card.css";

const Card6 = (props) => {
  return (
    <div className="card6">
      <div className="left">
        <div className="image">
          <img src={props.image} alt={`From ${props.image}`}></img>
        </div>
        <div className="text">
          <div className="text-top">
            <div className="Black-text line">{props.title}</div>
            <div className="small-line "> </div>
            <div className="Gray-text line"> {props.description} </div>
          </div>
          <div className="URL text-bottom line"> {props.link} </div>
        </div>
      </div>
      <div className="CTABox">
        <div className="CTA">
          <div className="CTA-Text">Add to Collection</div>
        </div>
      </div>
    </div>
  );
};

export default Card6;
