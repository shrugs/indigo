import React, { Component } from "react";
import { BH, Link, H } from "../components/Components";

const Principles = () => {
  return (
    <div className="flex justify-center bb1">
      <div className="grid12 ph8 ph32-lg pt4 pb9">
        <h1 className="mv8 fw-bold c1-13" id="intro">
          Principles
        </h1>
        <div className="c1-7">
          <h4 className=" fw-bold">Share More</h4>
          <p className="measure">
            We found ourselves doing the same thing over and over again and
            realized we needed to to a better job of sharing our frontend code.
          </p>
        </div>
        <div className="c7-13">
          <h4 className=" fw-bold">Consistency is Key</h4>
          <p className="measure">
            A lot of our designs had inconsistancies – spacing, type scale and
            divergant code were all culprits. Indigo's CSS removes choices so we
            can get more done.
          </p>
        </div>
        <div className="c1-7 mt6">
          <h4 className=" fw-bold">Clean, meet Simple</h4>
          <p className="measure">
            Other frameworks present many choices to designers and developers.
            Since this is intended just for us, we could remove a lot of
            decision fatigue from our creative proccess.
          </p>
        </div>
        <div className="c7-13 mt6">
          <h4 className=" fw-bold">Do More With Less</h4>
          <p className="measure">
            Building the whole stack has it's advantages, but we have a lot to
            do, so we want to design things once and move on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Principles;
