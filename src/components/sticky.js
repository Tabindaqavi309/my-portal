import React from "react";
import "../App.css";
const Sticky = (props) => {
  return (
    <div className="sticky">
      <ul>
        <li>
          <i
            className={`huge ${props.iconName} icon`}
            style={{
              color: props.color,
              backgroundColor: props.backgroundColor,
            }}
          ></i>
        </li>
        <li>
          <h3>{props.name}</h3>
        </li>
      </ul>
      <p>{props.text}</p>
    </div>
  );
};
export default Sticky;
