import React, { Component } from "react";
import { BH, Link, H } from "../components/Components";

const Principles = () => {
  return (
    <React.Fragment>
      <h2 className="mv8 fw-bold full" id="principles">
        Principles
      </h2>

      <div className="half-1-ns full">
        <h4 className=" fw-bold">Share More</h4>
        <p className="measure">
          We found ourselves doing the same thing over and over again and
          realized we needed to to a better job of sharing our frontend code.
        </p>
      </div>

      <div className="half-2-ns full">
        <h4 className="fw-bold">Hygenic</h4>
        <p className="measure">
          A lot of our designs had inconsistancies – spacing, type scale and
          divergant code were all culprits. Indigo's CSS removes choices so we
          can get more done.
        </p>
      </div>

      <div className="half-1-ns full mt6">
        <h4 className="fw-bold">Simple</h4>
        <p className="measure">
          Other frameworks present many choices to designers and developers.
          Since this is intended just for us, we could remove a lot of decision
          fatigue from our creative proccess.
        </p>
      </div>

      <div className="half-2-ns full mt6">
        <h4 className=" fw-bold">Frugal</h4>
        <p className="measure">
          Building the whole stack has it's advantages, but we have a lot to do,
          so we want to design things once and move on.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Principles;
