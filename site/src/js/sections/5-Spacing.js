import React, { Component } from "react";
import { BH, Link, H } from "../components/Components";

const Spacing = () => {
  return (
    <div className="ph8 ph32-lg pb8 pb0-ns bb1 pt16">
      <div>
        <H id="spacing">Spacing</H>
        <div className="P measure mb8">
          इस्लाम ने कहा, ‘हम इनहेलर के जरिये चिटोसन के नैनोपार्टिकल की मदद से
          दवा को सांस के रास्ते सीधे फेफड़े तक पहुंचाने की दिशा में कार्य कर रहे
          हैं।’ चिटोसन एक प्राकृतिक पॉलीमर है, जो अपने आप विघटित हो जाता है।
          इसके साथ दवाओं को आसानी से जोड़ा जा
        </div>
        <div className="H2 mb4">Grids</div>
        <div className="P">
          6x1 Grid <span className="mono caption gray-50">.grid-6x1</span>
        </div>
        <div className="grid-6x1 vh10 mb4">
          <div className="bg-red-light" />
          <div className="bg-red-light" />
          <div className="bg-red-light" />
          <div className="bg-red-light" />
          <div className="bg-red-light" />
          <div className="bg-red-light" />
        </div>

        <div className="P">
          3x2 Grid <span className="mono caption gray-50">.grid-3x2</span>
        </div>
        <div className="grid-3x2 mb4">
          <div className="bg-red-light vh10" />
          <div className="bg-red-light vh10" />
          <div className="bg-red-light vh10" />
          <div className="bg-red-light vh10" />
          <div className="bg-red-light vh10" />
          <div className="bg-red-light vh10" />
        </div>

        <div className="P">
          2x3 Grid <span className="mono caption gray-50">.grid-2x3</span>
        </div>
        <div className="grid-2x3 mb4">
          <div className="bg-red-light vh10" />
          <div className="bg-red-light vh10" />
          <div className="bg-red-light vh10" />
          <div className="bg-red-light vh10" />
          <div className="bg-red-light vh10" />
          <div className="bg-red-light vh10" />
        </div>

        <div className="P">
          1x6 Grid <span className="mono caption gray-50">.grid-3x2</span>
        </div>
        <div className="grid-1x6 mb4">
          <div className="bg-red-light vh10" />
          <div className="bg-red-light vh10" />
          <div className="bg-red-light vh10" />
          <div className="bg-red-light vh10" />
          <div className="bg-red-light vh10" />
          <div className="bg-red-light vh10" />
        </div>

        <div className="H2 mb4">Padding</div>
        <div className="H3 mb4">Padding All</div>
        <div className="mb1">
          <span className="p0 bg-green white P">p0</span>
        </div>
        <div className="mb1">
          <span className="p1 bg-green white P">p1</span>
        </div>
        <div className="mb1">
          <span className="p2 bg-green white P">p2</span>
        </div>
        <div className="mb1">
          <span className="p3 bg-green white P">p3</span>
        </div>
        <div className="mb1">
          <span className="p4 bg-green white P">p4</span>
        </div>
        <div className="mb1">
          <span className="p5 bg-green white P">p6</span>
        </div>
        <div className="mb1">
          <span className="p7 bg-green white P">p7</span>
        </div>
        <div className="mb1">
          <span className="p8 bg-green white P">p8</span>
        </div>
        <div className="mb1">
          <span className="p9 bg-green white P">p9</span>
        </div>
        <div className="mb1">
          <span className="p10 bg-green white P">p10</span>
        </div>
      </div>
    </div>
  );
};

export default Spacing;
