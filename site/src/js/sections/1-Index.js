import React, { Component } from "react";
import { BH, Link } from "../components/Components";

const Splash = () => {
  return (
    <React.Fragment>
      {
        //<div className="c1-4-ns mt6 mt0-ns c1-7">
      }
      <div className="fourth-1-ns half-1 mt6 mt0-ns">
        <h4 className="black mb2 fw-bold">Design</h4>
        <Link href="#intro">Introduction</Link>
        <Link>Principles</Link>
        <Link>Visual Language</Link>
        <Link href="#typescale">Typescale</Link>
        <Link href="#color">Color</Link>
        <Link href="#spacing">Spacing</Link>
        <Link>Layout</Link>
        <Link>Size Scales</Link>
        <Link>Grid</Link>
        <Link>Breakpoints</Link>
      </div>

      <div className="fourth-2-ns half-2 mt6 mt0-ns">
        <h4 className="black mb2 fw-bold">Utilities</h4>
        <Link>Border </Link>
        <Link>Debug</Link>
        <Link>Display</Link>
        <Link>Flexbox</Link>
        <Link>Height</Link>
        <Link>Hover</Link>
        <Link>Normalize</Link>
        <Link>Opacity</Link>
        <Link>Padding</Link>
        <Link>Position</Link>
        <Link>Size</Link>
        <Link>Typography</Link>
        <Link>Visibility</Link>
        <Link>Width</Link>
        <Link>Z-Index</Link>
      </div>

      <div className="fourth-3-ns half-1 mt6  mt0-ns">
        <h4 className="black mb2 fw-bold">Components</h4>
        <Link>Button</Link>
        <Link>InputField</Link>
        <Link>RadioButton</Link>
        <Link>Link</Link>
      </div>

      <div className="fourth-4-ns half-2 mt6 mt0-ns">
        <h4 className="black mb4 fw-bold">Downloads</h4>
        <Link>indigo.css</Link>
        <Link>indigo-react</Link>
        <Link>indigo-html</Link>
      </div>

      {
        // <div className="c9-11-lg c5-9-md mt6 mt0-ns c1-7">
        //   <h4 className="black mb4 fw-bold">Downloads</h4>
        //   <Link>indigo.css</Link>
        //   <Link>indigo-react</Link>
        //   <Link>indigo-html</Link>
        // </div>
        // <div className="c11-13-lg c9-13-md mt6 mt0-ns c7-13">
        //   <h4 className="black mb4 fw-bold">Sources</h4>
        //   <Link>↗ Github</Link>
        //   <Link>↗ CDN</Link>
        // </div>
      }
    </React.Fragment>
  );
};

export default Splash;
