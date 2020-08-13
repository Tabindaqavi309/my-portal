import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
    };
  }
  render() {
    return (
      <div>
        <form class="ui form">
          <div class="field">
            <label>Your Name</label>
            <input
              type="text"
              name="first-name"
              placeholder=" Name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div class="field">
            <label>Email Address</label>
            <input
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
              type="text"
              name="last-name"
              placeholder="Email Address"
              value={this.state.email}
            />
          </div>

          <div class="field"></div>
          <button
            onClick={() => {
              console.log(this.state.name);
              console.log(this.state.email);
            }}
            class="ui button"
            type="button"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
