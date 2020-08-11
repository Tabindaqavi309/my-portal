import React from "react";
import FancyCard from "../components/fancyCard.js";
import canteen from "../assets/images/canteen1.jpg";
import global from "../assets/images/global.jpg";
import grab from "../assets/images/grab.jpg";
import todo from "../assets/images/todo.png";
class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: [
        "Canteen Management System",
        "Grab it all (Ecommerce)",
        "Todo-Web Application",
        "Global Sequence Alignment",
      ],
      languages: [
        ["HTML5", "CSS3", "JavaScript", "MySQL", "Express Js", "Node js"],
        ["HTML5", "CSS3", "JavaScript", "MongoDB", "Express Js", "Node js"],
        ["Node js", "JavaScript", "MongoDB", "Express js", "Postman"],
        ["C++", "Eclipse"],
      ],
      type: [
        "Back-end Development",
        "Back-end Development",
        "Back-end Development",
        "Full Stack Development",
      ],
      iconName: ["utensils", "shopping cart", "list", "dna"],
      imageName: [canteen, grab, todo, global],
    };
  }

  render() {
    var elements = [];
    for (var i = 0; i < 4; i++) {
      elements.push(
        <FancyCard
          name={this.state.name[i]}
          type={this.state.type[i]}
          iconName={this.state.iconName[i]}
          image={this.state.imageName[i]}
          arrayelement={this.state.languages[i]}
        />
      );
    }
    return <section className="Middle-Section">{elements}</section>;
  }
}
export default Work;
