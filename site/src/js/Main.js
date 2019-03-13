import React, { Component } from "react";
import Splash from "./sections/1-Splash";
import Intro from "./sections/2-Intro";

class Main extends Component {
  render() {
    return (
      <div className="col inter">
        <Splash />
        <Intro />
      </div>
    );
  }
}

export default Main;
