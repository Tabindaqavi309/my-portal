import React from "react";
import Card from "./card";
import Content from "./cardcontent";
import Intro from "./Intro";
import "../App.css";

class Expertise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          iconName: "lightbulb",
          color: "yellow",
          heading: "IDEAS",
          text:
            "I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.",
        },
        {
          iconName: "accusoft",
          color: "seagreen",
          heading: "DESIGN",
          text:
            "I sketch and wireframe interfaces focusing on content structure, intuitive UI patterns and simple interactions. I'm a minimalist who truly believes that less is more.",
        },
        {
          iconName: "file code",
          color: "darkred",
          heading: "DEVELOP",
          text:
            "I design in the browser with HTML(5), CSS(3) and a touch of JavaScript. I love coding things from scratch, but I can work with front-end frameworks like Bootstrap too.",
        },
      ],
    };
  }

  renderExpertise = () => {
    return this.state.data.map((item) => {
      return (
        <Card>
          <i
            className={`top-right massive ${item.iconName} icon`}
            style={{ color: item.color }}
          ></i>
          <Content heading={item.heading} text={item.text} />
        </Card>
      );
    });
  };

  render() {
    return (
      <section id="Expert" className="Middle">
        <Intro
          heading=" Hi, This is Tabinda. Thank you for visiting!"
          para="  I'm an IT enthusiast. Since the day I opted Information Technology as
            my career path, I have been experiencing new areas within it. I like
            to build web applications and I design restful Apis for them. I have
            experience of working on both Sequel & non-Sequel Databases. I also do
            freelancing on fiver."
        />
        <div className="expert">
          <h1>My Expertise</h1>
          <div className="container-5">{this.renderExpertise()}</div>
        </div>
      </section>
    );
  }
}

export default Expertise;
