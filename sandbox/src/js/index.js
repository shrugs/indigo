import React, { Component } from "react";
import ReactDOM from "react-dom";
import indigo from "./indigo/index";

const maxColor = 3; // implicit + 1
const last = {};
const colorGenerator = color => () => {
  if (!last[color]) {
    last[color] = 0;
  }

  last[color] = ((last[color] + 1) % maxColor) + 1;
  return `${color}${last[color]}`;
};

const green = colorGenerator("bg-green");
const yellow = colorGenerator("bg-yellow");

class Main extends Component {
  render() {
    return (
      <div className="mv10">
        <div className="flex justify-center">
          <div className="mw3">
            <h1 className="green">grid12</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="col grid12 mw3">
            <div className={`c1-7 h10 flex-center ${green()}`}>c1-7</div>
            <div className={`c7-13 h10 flex-center ${green()}`}>c7-13</div>

            <div className={`c1-5 h10 flex-center ${green()}`}>c1-5</div>
            <div className={`c5-9 h10 flex-center ${green()}`}>c5-9</div>
            <div className={`c9-13 h10 flex-center ${green()}`}>c9-13</div>

            <div className={`c1-4 h10 flex-center ${green()}`}>c1-4</div>
            <div className={`c4-7 h10 flex-center ${green()}`}>c4-7</div>
            <div className={`c7-10 h10 flex-center ${green()}`}>c7-10</div>
            <div className={`c10-13 h10 flex-center ${green()}`}>c10-13</div>

            <div className={`c1-2 h10 flex-center ${green()}`}>c1-2</div>
            <div className={`c2-3 h10 flex-center ${green()}`}>c2-3</div>
            <div className={`c3-4 h10 flex-center ${green()}`}>c3-4</div>
            <div className={`c4-5 h10 flex-center ${green()}`}>c4-5</div>
            <div className={`c5-6 h10 flex-center ${green()}`}>c5-6</div>
            <div className={`c6-7 h10 flex-center ${green()}`}>c6-7</div>
            <div className={`c7-8 h10 flex-center ${green()}`}>c7-8</div>
            <div className={`c8-9 h10 flex-center ${green()}`}>c8-9</div>
            <div className={`c9-10 h10 flex-center ${green()}`}>c9-10</div>
            <div className={`c10-11 h10 flex-center ${green()}`}>c10-9</div>
            <div className={`c11-12 h10 flex-center ${green()}`}>c11-12</div>
            <div className={`c12-13 h10 flex-center ${green()}`}>c12-13</div>

            <div className={`c1-2 h10  flex-center ${green()}`}>c1-2</div>
            <div className={`c2-13 h10 flex-center ${green()}`}>c2-13</div>

            <div className={`c1-3 h10 flex-center ${green()}`}>c1-3</div>
            <div className={`c3-13 h10 flex-center ${green()}`}>c3-13</div>

            <div className={`c1-4 h10 flex-center ${green()}`}>c1-3</div>
            <div className={`c4-13 h10 flex-center ${green()}`}>c3-13</div>

            <div className={`c1-5 h10 flex-center ${green()}`}>c1-3</div>
            <div className={`c5-13 h10 flex-center ${green()}`}>c3-13</div>

            <div className={`c1-4 c1-3-ns h10 flex-center ${green()}`}>
              c1-4 c1-3-ns
            </div>
            <div className={`c4-13 c3-13-ns h10 flex-center ${green()}`}>
              c4-13 c3-13-ns
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mw3">
            <h1 className="yellow-dark">grid8</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="col grid8 mw3">
            <div className={`c1-5 h10 flex-center ${yellow()}`}>c1-5</div>
            <div className={`c5-9 h10 flex-center ${yellow()}`}>c5-9</div>

            <div className={`c1-3 h10 flex-center ${yellow()}`}>c1-3</div>
            <div className={`c3-5 h10 flex-center ${yellow()}`}>c3-5</div>
            <div className={`c5-7 h10 flex-center ${yellow()}`}>c5-7</div>
            <div className={`c7-9 h10 flex-center ${yellow()}`}>c7-9</div>

            <div className={`c1-2 h10 flex-center ${yellow()}`}>c1-2</div>
            <div className={`c2-3 h10 flex-center ${yellow()}`}>c2-3</div>
            <div className={`c3-4 h10 flex-center ${yellow()}`}>c3-4</div>
            <div className={`c4-5 h10 flex-center ${yellow()}`}>c4-5</div>
            <div className={`c5-6 h10 flex-center ${yellow()}`}>c5-6</div>
            <div className={`c6-7 h10 flex-center ${yellow()}`}>c6-7</div>
            <div className={`c7-8 h10 flex-center ${yellow()}`}>c7-8</div>
            <div className={`c8-9 h10 flex-center ${yellow()}`}>c8-9</div>

            <div className={`c1-2 h10 flex-center ${yellow()}`}>c1-2</div>
            <div className={`c2-9 h10 flex-center ${yellow()}`}>c2-9</div>

            <div className={`c1-3 h10 flex-center ${yellow()}`}>c1-3</div>
            <div className={`c3-9 h10 flex-center ${yellow()}`}>c3-9</div>
            <div className={`c1-4 c1-3-ns h10 flex-center ${yellow()}`}>
              c1-4 c1-3-ns
            </div>
            <div className={`c4-9 c3-9-ns h10 flex-center ${yellow()}`}>
              c4-9 c3-9-ns
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.querySelectorAll("#root")[0]);
