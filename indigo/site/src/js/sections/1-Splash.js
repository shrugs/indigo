import React, { Component } from "react";
import { BH, Link } from "../components/Components";

const Splash = () => {
  return (
    <div className="grid-splash bg-blue h-auto vh90-lg white ph8 ph32-lg pb8 pb0-ns bb1 b-blue-90">
      <div>
        <BH>Indigo</BH>
        <Link>Introduction</Link>
        <Link>Approach</Link>
        <Link>Visual Language</Link>
        <Link>Elements</Link>
        <Link>Typescale</Link>
        <Link>Color</Link>
        <Link>Layout</Link>
      </div>
      <div>
        <BH>Updates</BH>
        <Link>↗ Blog</Link>
        <Link>↗ Twitter</Link>
        <Link>↗ Tlon</Link>
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
        <Link>↗ Github</Link>
        <Link>↗ CDN</Link>
      </div>
    </div>
  );
};

export default Splash;
