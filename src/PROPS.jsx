import React from "react";
import "./PROPS.css";

function PROPS(props) {
  return (
    <div className="Cards">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default PROPS;
