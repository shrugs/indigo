import React, { Component } from "react";
import { BH, Link, H } from "../components/Components";

const Intro = () => {
  return (
    <div className="ph8 ph32-lg pb8 pb0-ns bb1 pt16">
      <div>
        <H id="intro">Introduction</H>
        <div className="p measure-wide">
          About a week before our scheduled date for this interview, Avalon
          Emerson seemed over it. "I'm not a vibeman," she told me, contrasting
          her technical acumen with the unlearnable, abstract magic other DJs
          apparently possess. She was concerned that this feature would break
          down her workflow into digestible info nuggets that most people could
          and have figured out and that anyone can replicate. As a result she'd
          come off too clinical, her talents less impressive than those of the
          DJs she calls "vibemen."
        </div>
      </div>
      <div>
        <div className="p mb8 indent measure-wide">
          But never in my life have I met someone who vibes more intensely than
          Avalon Emerson. Her vibes have the capacity to exalt and to destroy.
          How did she not realize that she is a total vibewoman?
        </div>
      </div>
    </div>
  );
};

export default Intro;
