import React from "react";
import ReactDOM from "react-dom";
import Expertise from "./Expertise";
import logo from "./logo.PNG";
import Intro from "./Intro";
import FancyCard from "./fancyCard.js";
import canteen from "./canteen1.jpg";
import global from "./global.jpg";
import grab from "./grab.jpg";
import todo from "./todo.png";
import Sticky from "./sticky.js";
import Footer from "./footer";
import Form from "./form";
import "./App.css";
const App = () => {
  const array1 = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "MySQL",
    "Express Js",
    "Node js",
  ];
  const array2 = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "MongoDB",
    "Express Js",
    "Node js",
  ];
  const array3 = ["Node js", "JavaScript", "MongoDB", "Express js", "Postman"];
  const array4 = ["C++", "Eclipse"];
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
                <a href="/">CV</a>
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
      <section id="Expert" className="Middle">
        <Intro
          heading=" Hi, This is Tabinda. Thank you for visiting!"
          para="  I'm an IT enthusiast. Since the day I opted Information Technology as
          my career path, I have been experiencing new areas within it. I like
          to build web applications and I design restful Apis for them. I have
          experience of working on both Sequel & non-Sequel Databases. I also do
          freelancing on fiver."
        />
        <Expertise />
      </section>
      <section id="work" className="Middle">
        <Intro
          heading=" My Work"
          para="Following are some of the projects I have worked on!"
        />
      </section>
      <section className="Middle-Section">
        <FancyCard
          name="Canteen Management System"
          type="Back-end Development"
          iconName="utensils"
          image={canteen}
          arrayelement={array1}
        />
        <FancyCard
          name="Grab it all (Ecommerce)"
          type="Back-end Development"
          iconName="shopping cart"
          image={grab}
          arrayelement={array2}
        />

        <FancyCard
          name="Todo-Web Application"
          type="Back-end Development"
          iconName="list"
          image={todo}
          arrayelement={array3}
        />
        <FancyCard
          name="Global Sequence Alignment"
          type="Full Stack Development"
          iconName="dna"
          image={global}
          arrayelement={array4}
        />
      </section>
      <section id="skills" className="Middle">
        <Intro
          heading=" My Skills"
          para="Following are some of the skills that I have developed so far!"
        />
      </section>
      <section className="Middle-Section">
        <Sticky
          name="Node js"
          text="NodeJS is a cross-platform JS run-time environment that executes JS code outside of a browser."
          iconName="node js"
          color="green"
          backgroundColor="null"
        />
        <Sticky
          name="Mongo DB"
          text="MongoDB is a cross-platform document-oriented database. Classified as a NoSQL database."
          iconName="database"
          color="lightgreen"
          backgroundColor="null"
        />
        <Sticky
          name="JavaScript"
          text="JavaScript, often abbreviated as JS, is a high-level, interpreted programming language."
          iconName="shield alternate"
          color="yellow"
          backgroundColor="white"
        />
        <Sticky
          name="MySQL"
          text="MySQL is an open-source relational databases management system."
          iconName="sitemap"
          color="blue"
          backgroundColor="white"
        />
        <Sticky
          name="HTML5"
          text="HTML 5 is a markup language used for structuring and presenting content on the World Wide Web."
          iconName="html5"
          color="white"
          backgroundColor="orange"
        />
        <Sticky
          name="CSS3"
          text="CSS3 is a language that describes the style of an HTML document."
          iconName="css3"
          color="blue"
          backgroundColor="white"
        />
        <Sticky
          name="Material UI"
          text="React components that implement Google's Material Design."
          iconName="uikit"
          color="blue"
          backgroundColor="white"
        />
        <Sticky
          name="Github"
          text="GitHub is a web-based hosting service for version control using Git."
          iconName="github"
          color="black"
          backgroundColor="white"
        />
        <Sticky
          name="React"
          text="A JavaScript library for building user interfaces."
          iconName="react"
          color="blue"
          backgroundColor="white"
        />
        <Sticky
          name="Python"
          text="Python is an interpreted high-level programming language for general-purpose programming."
          iconName="python"
          color="blue"
          backgroundColor="yellow"
        />
      </section>
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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
