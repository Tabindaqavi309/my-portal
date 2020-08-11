import React from "react";
import Card from "./card";
import Content from "./cardcontent";
import "./App.css";

const Expertise = () => {
  return (
    <div className="expert">
      <h1>My Expertise</h1>
      <div className="container-5">
        <Card>
          <i
            className={`top-right massive lightbulb icon`}
            style={{ color: "yellow" }}
          ></i>
          <Content
            heading="IDEAS"
            text="I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.
"
          />
        </Card>
        <Card>
          <i
            className={`top-right massive accusoft icon`}
            style={{ color: "seagreen" }}
          ></i>
          <Content
            heading="DESIGN"
            text="I sketch and wireframe interfaces focusing on content structure, intuitive UI patterns and simple interactions. I'm a minimalist who truly believes that less is more.
"
          />
        </Card>
        <Card>
          <i
            className={`top-right massive file code icon`}
            style={{ color: "darkred" }}
          ></i>
          <Content
            heading="DEVELOP"
            text="I design in the browser with HTML(5), CSS(3) and a touch of JavaScript. I love coding things from scratch, but I can work with front-end frameworks like Bootstrap too.
"
          />
        </Card>
      </div>
    </div>
  );
};

export default Expertise;
