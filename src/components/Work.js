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
      data: [
        {
          name: "Canteen Management System",
          languages: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "MySQL",
            "Express Js",
            "Node js",
          ],
          type: "Back-end Development",
          iconName: "utensils",
          imageName: canteen,
        },
        {
          name: "Grab it all (Ecommerce)",
          languages: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "MongoDB",
            "Express Js",
            "Node js",
          ],
          type: "Back-end Development",
          iconName: "shopping cart",
          imageName: grab,
        },
        {
          name: "Todo-Web Application",
          languages: [
            "Node js",
            "JavaScript",
            "MongoDB",
            "Express js",
            "Postman",
          ],
          type: "Back-end Development",
          iconName: "list",
          imageName: todo,
        },
        {
          name: "Global Sequence Alignment",
          languages: ["C++", "Eclipse"],
          type: "Full Stack Development",
          iconName: "dna",
          imageName: global,
        },
      ],
    };
  }
  renderWork = () => {
    return this.state.data.map((item) => {
      return (
        <FancyCard
          name={item.name}
          type={item.type}
          iconName={item.iconName}
          image={item.imageName}
          arrayelement={item.languages}
        />
      );
    });
  };

  render() {
    return <section className="Middle-Section">{this.renderWork()}</section>;
  }
}
export default Work;
