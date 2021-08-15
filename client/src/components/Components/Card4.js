import React from "react";
import "./Card4.css";
import Button from "./Button/Button";

const Card4 = (props) => {
  const links = [
    "https://www.google1.com",
    "https://www.google2.com",
    "https://www.google3.com",
    "https://www.google44.com",
  ];
  const listItems = links.map((number) => <div className="link">{number}</div>);

  return (
    <div className="card4">
      <div className="card-new">
        <div className="image">
          <img src={props.image} alt={`From ${props.image}`}></img>
        </div>
        <div className="links">
          <div className="links-heading">This is the heading</div>
          <div>{listItems}</div>
        </div>
      </div>
      <div className="Buttons">
        <Button type="Secondary" icon="Back" text="Back"></Button>
        <Button type="Primary" text="Edit"></Button>
      </div>
    </div>
  );
};

export default Card4;
