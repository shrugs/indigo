import React, { Component } from "react";
import ReactDOM from "react-dom";
import indigo from "./indigo/index.js";

const seq = n => Array.from(Array(n), (_, i) => i);

class Main extends Component {
  render() {
    return (
      <div className="debug grid-2 ph4">
        {seq(12).map(i => {
          return <div className={""}>{i + 1}</div>;
        })}
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.querySelectorAll("#root")[0]);
