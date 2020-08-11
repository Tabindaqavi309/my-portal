import React from "react";

const Form = () => {
  return (
    <div>
      <form class="ui form">
        <div class="field">
          <label>Your Name</label>
          <input type="text" name="first-name" placeholder=" Name" />
        </div>
        <div class="field">
          <label>Email Address</label>
          <input type="text" name="last-name" placeholder="Email Address" />
        </div>

        <div class="field"></div>
        <button class="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
