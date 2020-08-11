import React from "react";
import Card from "./card";
import Content from "./cardcontent";
import Intro from "./Intro";
import "../App.css";

class Expertise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconName: ["lightbulb", "accusoft", "file code"],
      color: ["yellow", "seagreen", "darkred"],
      heading: ["IDEAS", "DESIGN", "DEVELOP"],
      text: [
        "I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.",
        "I sketch and wireframe interfaces focusing on content structure, intuitive UI patterns and simple interactions. I'm a minimalist who truly believes that less is more.",
        "I design in the browser with HTML(5), CSS(3) and a touch of JavaScript. I love coding things from scratch, but I can work with front-end frameworks like Bootstrap too.",
      ],
    };
  }
  render() {
    var elements = [];
    for (var i = 0; i < 3; i++) {
      elements.push(
        <Card>
          <i
            className={`top-right massive ${this.state.iconName[i]} icon`}
            style={{ color: this.state.color[i] }}
          ></i>
          <Content heading={this.state.heading[i]} text={this.state.text[i]} />
        </Card>
      );
    }
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
          <div className="container-5">{elements}</div>
        </div>
      </section>
    );
  }
}

export default Expertise;
