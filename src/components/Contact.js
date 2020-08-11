import React from "react";
import Footer from "./footer";
import Form from "./form";
const Contact = () => {
  return (
    <section id="contact" className="last">
      <Footer
        heading="Contact me"
        para="If you want to connect, fill in the form below or send me an email at tabindaqavi1@gmail.com"
      />
      <div className="footer-div">
        <Form />
      </div>
      <div class="hyper-class">
        <ul>
          <li>
            <a href="/">
              <i className="huge facebook icon"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="huge linkedin icon"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="huge skype icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
