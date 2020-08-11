import React from "react";
import "./App.css";

const Intro = (props) => {
  return (
    <div className="Middle-Section">
      <div className="container-4">
        <h1> {props.heading}</h1>
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default Intro;
