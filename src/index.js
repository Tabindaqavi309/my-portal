import React from "react";
import ReactDOM from "react-dom";
import Expertise from "./components/Expertise";
import logo from "./assets/images/logo.PNG";
import Intro from "./components/Intro";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";
const App = () => {
  return (
    <div>
      <header className="main">
        <div className="container">
          <div id="box1">
            <a href="/">
              <img src={logo} alt="123" />
            </a>
          </div>
          <div id="box2">
            <ul>
              <li>
                <a href="#Expert">EXPERTISE</a>
              </li>
              <li>
                <a href="#work">WORK</a>
              </li>
              <li>
                <a href="#skills">SKILLS</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/112whOKsqVtwzLf3nlUBI3fR2_ytT_sXF/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="intro">
        <div className="container-2">
          <s10>Hello There!</s10>
          <br />
          <br />
          <s11>Welcome to my Portal!</s11>
        </div>
      </div>

      <Expertise />

      <section id="work" className="Middle">
        <Intro
          heading=" My Work"
          para="Following are some of the projects I have worked on!"
        />
      </section>
      <Work />
      <section id="skills" className="Middle">
        <Intro
          heading=" My Skills"
          para="Following are some of the skills that I have developed so far!"
        />
      </section>
      <Skills />
      <Contact />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
