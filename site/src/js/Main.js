import React, { Component } from "react";
import Splash from "./sections/1-Splash";
import Intro from "./sections/2-Intro";
import Typescale from "./sections/3-Typescale";
import Color from "./sections/4-Color";
import Spacing from "./sections/5-Spacing";

class Main extends Component {
  render() {
    return (
      <div className="col inter">
        <Splash />
        <Intro />
        <Typescale />
        <Color />
        <Spacing />
      </div>
    );
  }
}

export default Main;
