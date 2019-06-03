import React, { Component } from "react";
import { BH, Link, H } from "../components/Components";

const Intro = () => {
  return (
    <div className="flex justify-center bb1">
      <div className="grid12 ph4 ph8-ns pt9 pb10">
        <div className="c1-7">
          <h1 className="mb8 fw-bold c1-13" id="intro">
            Introduction
          </h1>
          <p className="c1-7 measure">
            Indigo is <a href="tlon.io">Tlon's</a> design language. It's also a
            set of web stack implementation tools. We created it because we
            wanted to make fewer visual decisions in our design process. We're
            sharing it here because we think people might be interested in how
            we got there and what decisions we made.
          </p>
        </div>

        <div className="c7-13 h12 b1 b-gray-50" />
      </div>
    </div>
  );
};

export default Intro;
