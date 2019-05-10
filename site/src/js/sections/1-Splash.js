import React, { Component } from "react";
import { BH, Link } from "../components/Components";

const Splash = () => {
  return (
    <div className="grid-2x3 grid-6x1-lg grid-3x2-md bg-blue h-auto vh100-ns white ph8 pb8 pb0-ns">
      <div>
        <BH>Indigo</BH>
        <Link href="#intro">Introduction</Link>
        <Link>Principles</Link>
        <Link>Visual Language</Link>
      </div>
      <div>
        <BH>Utilities</BH>
        <Link href="#typescale">Typescale</Link>
        <Link href="#color">Color</Link>
        <Link href="#spacing">Spacing</Link>
        <Link>Layout</Link>
        <Link>Size Scales</Link>
      </div>
      <div>
        <BH>Components</BH>
        <Link>React</Link>
        <Link>HTML</Link>
      </div>
      <div>
        <BH>Updates</BH>
        <Link>↗ Blog</Link>
        <Link>↗ Twitter</Link>
        <Link>↗ Tlon</Link>
      </div>
      <div>
        <BH>Downloads</BH>
        <Link>indigo.css</Link>
        <Link>indigo-react</Link>
        <Link>indigo-html</Link>
      </div>
      <div>
        <BH>Sources</BH>
        <Link>↗ Github</Link>
        <Link>↗ CDN</Link>
      </div>
    </div>
  );
};

export default Splash;
