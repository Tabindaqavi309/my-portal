import React from "react";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="container-6">
        {" "}
        <h1> {props.heading}</h1>
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default Footer;
