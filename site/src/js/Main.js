import React, { Component } from "react";
import Splash from "./sections/1-Splash";
import Intro from "./sections/2-Intro";
import Principles from "./sections/3-Principles";
import VisualLanguage from "./sections/4-VisualLanguage";
import Typescale from "./sections/5-Typescale";
import Color from "./sections/6-Color";
import Spacing from "./sections/7-Spacing";

class Main extends Component {
  render() {
    return (
      <div className="">
        <Splash />
        <Intro />
        <Principles />

        <VisualLanguage />
        {
          // <Typescale />
          // <Color />
          // <Spacing />
        }
      </div>
    );
  }
}

export default Main;
