import React, { Component } from "react";
import { BH, Link, H } from "../components/Components";

const Intro = () => {
  return (
    <div className="ph8 ph32-lg pb8 pb0-ns bb1 pt16">
      <div>
        <H id="intro">Introduction</H>
        <div className="P measure-wide">
          What the devil. No worries. No cares. Just float and wait for the wind
          to blow you around. Do an almighty painting with us. If you don't like
          it - change it. It's your world.
        </div>
      </div>
      <div>
        <div className="P mb8 indent measure-wide">
          This is your world. Don't kill all your dark areas - you need them to
          show the light. This is a happy place, little squirrels live here and
          play. But we're not there yet, so we don't need to worry about it.
          Nice little clouds playing around in the sky.
        </div>
      </div>
    </div>
  );
};

export default Intro;
