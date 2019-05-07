import React, { Component } from "react";
import Splash from "./sections/1-Splash";
import Intro from "./sections/2-Intro";
import Typescale from "./sections/3-Typescale";

class Main extends Component {
  render() {
    return (
      <div className="col inter">
        <Splash />
        <Intro />
        <Typescale />
      </div>
    );
  }
}

export default Main;
