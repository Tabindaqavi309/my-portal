import React from "react";
import Tag from "./tag";
import Button from "@material-ui/core/Button";
const FancyCard = (props) => {
  return (
    <div className="fancy-card">
      <div className="top">
        <ul>
          <li>
            <i className={`${props.iconName} icon`}></i>
          </li>
          <li>
            <h5>{props.name}</h5>
          </li>
        </ul>
        <p>{props.type}</p>
      </div>
      <div className="bottom">
        <img src={props.image} alt="image1" />
      </div>
      <div className="Middle-one">
        {props.arrayelement.map((key) => {
          return <Tag>{key}</Tag>;
        })}
      </div>
      <div className="Last-One">
        <Button className="button1" variant="contained" color="secondary">
          VIEW
        </Button>
      </div>
    </div>
  );
};
export default FancyCard;
