import React, { Component } from "react";
import { BH, Link, H } from "../components/Components";

const Intro = () => {
  return (
    <React.Fragment>
      <div className="full bt4 b-black mv10" />
      <h1 className="mb8 fw-bold full" id="intro">
        Introduction
      </h1>
      <p className="measure full">
        Indigo is <a href="tlon.io">Tlon's</a> design language. It's also a set
        of web stack implementation tools. We created it because we wanted to
        make fewer visual decisions in our design process. We're sharing it here
        because we think people might be interested in how we got there and what
        decisions we made.
      </p>
    </React.Fragment>
  );
};

export default Intro;
