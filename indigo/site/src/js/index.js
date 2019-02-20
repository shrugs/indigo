import React, { Component } from "react";
import ReactDOM from "react-dom";
// import indigo from './indigo/index.js';

// Banner Heading
const BH = props => {
  return <div className="t6 regular mt8 mb10">{props.children}</div>;
};

const Link = props => {
  return <div className="t4 regular mb3">{props.children}</div>;
};

class WelcomePage extends Component {
  render() {
    return (
      <div className="col">
        <div className="rh-auto rh7-ns grid bg-blue white ph8 ph32-sm pb8">
          <div>
            <BH>Indigo</BH>
            <Link>Approach</Link>
            <Link>Visual Language</Link>
            <Link>Elements</Link>
            <Link>Typescale</Link>
            <Link>Color</Link>
            <Link>Layout</Link>
          </div>
          <div>
            <BH>Updates</BH>
            <Link>Blog</Link>
            <Link>Twitter</Link>
            <Link>Tlon</Link>
          </div>
          <div>
            <BH>Reference</BH>
            <Link>Utilities</Link>
            <Link>React</Link>
            <Link>HTML</Link>
          </div>
          <div>
            <BH>Downloads</BH>
            <Link>indigo.css</Link>
            <Link>indigo-react</Link>
            <Link>indigo-html</Link>
          </div>
          <div>
            <BH>Sources</BH>
            <Link>Github</Link>
            <Link>CDN</Link>
          </div>
        </div>
        <div className="grid bg-white black" />
      </div>
    );
  }
}

ReactDOM.render(<WelcomePage />, document.querySelectorAll("#root")[0]);
