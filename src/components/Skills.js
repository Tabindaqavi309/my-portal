import React from "react";
import Sticky from "./sticky.js";
class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Node js",
          text:
            "NodeJS is a cross-platform JS run-time environment that executes JS code outside of a browser.",
          iconName: "node js",
          color: "green",
          backgroundColor: "white",
        },
        {
          name: "Mongo DB",
          text:
            "MongoDB is a cross-platform document-oriented database. Classified as a NoSQL database.",
          iconName: "database",
          color: "lightgreen",
          backgroundColor: "white",
        },
        {
          name: "JavaScript",
          text:
            "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language.",
          iconName: "shield alternate",
          color: "yellow",
          backgroundColor: "white",
        },
        {
          name: "MySQL",
          text:
            "MySQL is an open-source relational databases management system.",
          iconName: "sitemap",
          color: "blue",
          backgroundColor: "white",
        },
        {
          name: "HTML5",
          text:
            "HTML 5 is a markup language used for structuring and presenting content on the World Wide Web.",
          iconName: "html5",
          color: "white",
          backgroundColor: "orange",
        },
        {
          name: "CSS3",
          text:
            "CSS3 is a language that describes the style of an HTML document.",
          iconName: "css3",
          color: "blue",
          backgroundColor: "white",
        },
        {
          name: "Material UI",
          text: "React components that implement Google's Material Design.",
          iconName: "uikit",
          color: "blue",
          backgroundColor: "white",
        },
        {
          name: "Github",
          text:
            "GitHub is a web-based hosting service for version control using Git.",
          iconName: "github",
          color: "black",
          backgroundColor: "white",
        },
        {
          name: "React",
          text: "A JavaScript library for building user interfaces.",
          iconName: "react",
          color: "blue",
          backgroundColor: "white",
        },
        {
          name: "Python",
          text:
            "Python is an interpreted high-level programming language for general-purpose programming.",
          iconName: "python",
          color: "blue",
          backgroundColor: "yellow",
        },
      ],
    };
  }
  renderSkills = () => {
    return this.state.data.map((item) => {
      return (
        <Sticky
          name={item.name}
          text={item.text}
          iconName={item.iconName}
          color={item.color}
          backgroundColor={item.backgroundColor}
        />
      );
    });
  };
  render() {
    return <section className="Middle-Section">{this.renderSkills()}</section>;
  }
}

export default Skills;
