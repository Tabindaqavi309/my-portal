import React from "react";
import "../App.css";
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heading: props.heading, text: props.text };
  }

  render() {
    return (
      <div className="card-content">
        <h2>{this.state.heading}</h2>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
export default Content;
