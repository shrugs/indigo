import React, { Component } from "react";
import Indigo from "./sections/0-Indigo";
import Index from "./sections/1-Index";
import Intro from "./sections/2-Intro";
import Principles from "./sections/3-Principles";
import VisualLanguage from "./sections/4-VisualLanguage";
import Typescale from "./sections/5-Typescale";
import Color from "./sections/6-Color";
import Spacing from "./sections/7-Spacing";

class Main extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className="grid12 pb9 ph6 ph6-md ph0-lg">
          <Indigo />
          <Index />

          <Intro />
          <Principles />

          {
            // <VisualLanguage />
          }
          <Typescale />
          <Color />
          {
            // <Spacing />
          }
        </div>
      </div>
    );
  }
}

export default Main;
