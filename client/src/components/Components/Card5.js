import React from "react";
import "./Card5.css";
import ChildCard from "./ChildCard";

const Card6 = (props) => {
  return (
    <div className="card5">
      <div className="heading">{props.heading}</div>
      <ChildCard
        image="www.placehold.it"
        title="Card1"
        link="http://placehold.it"
      />
      <ChildCard
        image="www.placehold.it"
        title="Card1"
        link="http://placehold.it"
      />
      <ChildCard
        image="www.placehold.it"
        title="Card1"
        link="http://placehold.it"
      />
    </div>
  );
};

export default Card6;
