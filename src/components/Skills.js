import React from "react";
import Sticky from "./sticky.js";
class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [
        "Node js",
        "Mongo DB",
        "JavaScript",
        "MySQL",
        "HTML5",
        "CSS3",
        "Material UI",
        "Github",
        "React",
        "Python",
      ],
      text: [
        "NodeJS is a cross-platform JS run-time environment that executes JS code outside of a browser.",
        "MongoDB is a cross-platform document-oriented database. Classified as a NoSQL database.",
        "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language.",
        "MySQL is an open-source relational databases management system.",
        "HTML 5 is a markup language used for structuring and presenting content on the World Wide Web.",
        "CSS3 is a language that describes the style of an HTML document.",
        "React components that implement Google's Material Design.",
        "GitHub is a web-based hosting service for version control using Git.",
        "A JavaScript library for building user interfaces.",
        "Python is an interpreted high-level programming language for general-purpose programming.",
      ],
      iconName: [
        "node js",
        "database",
        "shield alternate",
        "sitemap",
        "html5",
        "css3",
        "uikit",
        "github",
        "react",
        "python",
      ],
      color: [
        "green",
        "lightgreen",
        "yellow",
        "blue",
        "white",
        "blue",
        "blue",
        "black",
        "blue",
        "blue",
      ],
      backgroundColor: [
        "white",
        "white",
        "white",
        "white",
        "orange",
        "white",
        "white",
        "white",
        "white",
        "yellow",
      ],
    };
  }
  render() {
    var elements = [];
    for (var i = 0; i < 10; i++) {
      elements.push(
        <Sticky
          name={this.state.name[i]}
          text={this.state.text[i]}
          iconName={this.state.iconName[i]}
          color={this.state.color[i]}
          backgroundColor={this.state.backgroundColor[i]}
        />
      );
    }
    return <section className="Middle-Section">{elements}</section>;
  }
}

export default Skills;
